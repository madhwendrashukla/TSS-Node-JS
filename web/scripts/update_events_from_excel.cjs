const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

const EXCEL_PATH = 'd:/tss v2/India_Events_2026_COMPLETE.xlsx';
const TS_PATH = path.join(__dirname, '../lib/data/events.ts');

function formatMonth(dateStr) {
    if (!dateStr) return 'TBA';
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) {
        const match = dateStr.match(/[a-zA-Z]+/);
        if (match) return match[0].substring(0, 3);
        return 'TBA';
    }
    return months[d.getMonth()];
}

function formatStartDateRange(startStr, endStr) {
    if (!startStr) return 'TBA';
    const s = new Date(startStr);
    if (isNaN(s.getTime())) return startStr;

    const dayS = s.getDate();
    const monthS = formatMonth(startStr);

    if (!endStr || endStr === startStr) {
        return `${dayS} ${monthS}`;
    }

    const e = new Date(endStr);
    if (isNaN(e.getTime())) return `${dayS} ${monthS}`;

    const dayE = e.getDate();
    const monthE = formatMonth(endStr);

    if (monthS === monthE) {
        return `${dayS}-${dayE} ${monthS}`;
    } else {
        return `${dayS} ${monthS}-${dayE} ${monthE}`;
    }
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
            month: formatMonth(start),
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
    console.log(`Successfully updated ${newEvents.length} events with priority and description.`);
}

updateEvents();
