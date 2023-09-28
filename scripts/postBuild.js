import fs from 'fs';
import path from 'path';

function main() {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const source = fs.readFileSync(path.join(__dirname, '..', 'package.json')).toString('utf-8');
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};
  sourceObj.main = 'index.js';
  fs.writeFileSync(path.join(__dirname, '..', 'dist', 'package.json'), Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
  fs.writeFileSync(path.join(__dirname, '..', 'dist', 'version.txt'), Buffer.from(sourceObj.version, 'utf-8'));
}

main();