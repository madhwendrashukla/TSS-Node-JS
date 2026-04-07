const fs = require('fs');
const content = fs.readFileSync('./lib/data/events.ts', 'utf8');
const match = content.match(/{\s*tag:/g);
console.log('Current events count:', match ? match.length : 0);
