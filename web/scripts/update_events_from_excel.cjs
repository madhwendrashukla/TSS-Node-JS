const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

const EXCEL_PATH = 'd:/tss v2/India_Events_2026_COMPLETE.xlsx';
const TS_PATH = path.join(__dirname, '../lib/data/events.ts');

const MONTHS_MAP = {
    'jan': 'Jan', 'feb': 'Feb', 'mar': 'Mar', 'apr': 'Apr', 'may': 'May', 'jun': 'Jun',
    'jul': 'Jul', 'aug': 'Aug', 'sep': 'Sep', 'oct': 'Oct', 'nov': 'Nov', 'dec': 'Dec'
};

function extractMonth(dateVal) {
    if (!dateVal) return 'TBA';
    
    // If it's an Excel date (number)
    if (typeof dateVal === 'number') {
        const d = xlsx.SSF.parse_date_code(dateVal);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[d.m - 1].substring(0, 3);
    }

    const str = String(dateVal).toLowerCase();
    for (const [key, val] of Object.entries(MONTHS_MAP)) {
        if (str.includes(key)) return val;
    }
    
    return 'TBA';
}

function formatDisplayDate(dateVal) {
    if (!dateVal) return 'TBA';
    if (typeof dateVal === 'number') {
        const d = xlsx.SSF.parse_date_code(dateVal);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${d.d} ${months[d.m - 1]}`;
    }
    return String(dateVal).trim();
}

function formatStartDateRange(start, end) {
    if (!start) return 'TBA';
    
    const startStr = formatDisplayDate(start);
    const endStr = formatDisplayDate(end);

    if (startStr === endStr || !end) return startStr;
    
    // If start is like "14 Oct 2026" and end is like "16 Oct 2026"
    // We want "14-16 Oct"
    const startParts = startStr.split(' ');
    const endParts = endStr.split(' ');

    if (startParts.length >= 2 && endParts.length >= 2 && startParts[1] === endParts[1]) {
        return `${startParts[0]}-${endParts[0]} ${startParts[1]}`;
    }

    return `${startStr} - ${endStr}`;
}

function updateEvents() {
    const workbook = xlsx.readFile(EXCEL_PATH);
    const sheet = workbook.Sheets['📋 All Events'];
    const data = xlsx.utils.sheet_to_json(sheet, { range: 1 });

    const newEvents = data.map(row => {
        const start = row['Start Date'];
        const end = row['End Date'];
        
        return {
            tag: row['Event Type'] || 'B2B',
            eventName: row['Event Name'] || 'Unnamed Event',
            exhibitionCentre: row['Venue'] || 'TBA',
            location: row['City'] || 'TBA',
            startDate: formatStartDateRange(start, end),
            month: extractMonth(start),
            weblink: row['Official Website'] || '',
            priority: row['Founder Priority'] || '',
            description: row['Description / Why Attend'] || ''
        };
    });

    let tsContent = fs.readFileSync(TS_PATH, 'utf8');
    
    const startMarker = 'export const eventsData: FounderEvent[] = [';
    const endMarker = '];';
    
    const startIndex = tsContent.indexOf(startMarker);
    const lastIndex = tsContent.lastIndexOf(endMarker);
    
    if (startIndex === -1) {
        console.error('Could not find eventsData marker');
        return;
    }

    const newTsContent = tsContent.substring(0, startIndex + startMarker.length) + 
                         '\n' + newEvents.map(e => `  ${JSON.stringify(e)}`).join(',\n') + 
                         '\n' + tsContent.substring(lastIndex);

    fs.writeFileSync(TS_PATH, newTsContent, 'utf8');
    console.log(`Successfully updated ${newEvents.length} events with standardized dates/months.`);
}

updateEvents();

