const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk('app').concat(walk('components'));
let modifiedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Remove large sizes for breakpoints above md (lg:text-7xl, lg:text-[100px], etc.)
    content = content.replace(/\s+(?:lg|xl|2xl):text-(?:\[\d+px\]|[1-9]?[0-9]xl)/g, '');
    
    // Change md large sizes to md:text-5xl
    content = content.replace(/\bmd:text-(?:[6-9]xl|[1-9][0-9]xl)\b/g, 'md:text-5xl');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Updated ${modifiedFiles} files.`);
