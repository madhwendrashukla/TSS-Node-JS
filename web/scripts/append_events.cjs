const fs = require('fs');
const newEventsData = require('./out.json');

const newEventsStr = newEventsData.map(e => {
  let startDate = e['Start Date'];
  let endDate = e['End Date'];
  
  if (startDate) {
      const d = new Date(startDate);
      startDate = d.getDate() + ' Apr'; 
      if (endDate && startDate !== new Date(endDate).getDate() + ' Apr') {
          startDate = d.getDate() + '-' + new Date(endDate).getDate() + ' Apr';
      }
  }

  return `  {
    tag: ${JSON.stringify(e.Tag || 'B2B')},
    eventName: ${JSON.stringify(e['Event Name'] || '')},
    exhibitionCentre: ${JSON.stringify(e['Exhibition Centre'] || '')},
    location: ${JSON.stringify(e.Location || '')},
    startDate: ${JSON.stringify(startDate || 'TBA')},
    month: ${JSON.stringify(e.Month || 'Apr')},
    weblink: ${JSON.stringify(e.Weblink || '')}
  }`;
}).join(',\n');

const tsFile = '../lib/data/events.ts';
let tsContent = fs.readFileSync(tsFile, 'utf8');

tsContent = tsContent.replace(/export const eventsData: FounderEvent\[\] = \[/, `export const eventsData: FounderEvent[] = [\n${newEventsStr},`);

fs.writeFileSync(tsFile, tsContent, 'utf8');
