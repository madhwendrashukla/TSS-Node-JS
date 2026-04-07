const xlsx = require('xlsx');
const workbook = xlsx.readFile('d:/tss v2/India_Events_2026_COMPLETE.xlsx');
const sheet = workbook.Sheets['📋 All Events'];
const data = xlsx.utils.sheet_to_json(sheet, { range: 1 });
data.slice(0, 5).forEach((event, i) => {
  console.log(`Row ${i+2}: Name: ${event['Event Name']}, Start: ${event['Start Date']}, End: ${event['End Date']}, Venue: ${event['Venue']}, City: ${event['City']}`);
});
