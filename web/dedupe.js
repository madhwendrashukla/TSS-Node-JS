const fs = require('fs');
const path = 'lib/data/events.ts';
let content = fs.readFileSync(path, 'utf8');
const match = content.match(/export const eventsData: FounderEvent\[\] = (\[[\s\S]*?\]);/);
if (match) {
    const events = eval('(' + match[1] + ')');
    const seen = new Set();
    const deduplicated = [];
    events.forEach(e => {
        if (!seen.has(e.eventName)) {
            seen.add(e.eventName);
            deduplicated.push(e);
        }
    });
    const newText = JSON.stringify(deduplicated, null, 2).replace(/"([^"]+)":/g, '$1:');
    fs.writeFileSync(path, content.replace(match[1], newText), 'utf8');
    console.log('Original length ' + events.length + ', New length ' + deduplicated.length);
} else {
    throw new Error('Match failed');
}
