const fs = require('fs');
const path = require('path');

function findEmptyFiles(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...findEmptyFiles(full));
    } else if (stat.size === 0) {
      results.push(full);
    }
  }
  return results;
}

const root = path.join(__dirname, '..', 'src');
const empties = findEmptyFiles(root);
if (empties.length > 0) {
  console.error('Empty files detected:');
  empties.forEach(f => console.error(' -', f));
  process.exit(1);
}
console.log('No empty files found.');
