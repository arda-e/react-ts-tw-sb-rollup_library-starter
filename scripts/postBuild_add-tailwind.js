import fs from 'fs';
import path from 'path';

function main() {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const indexPath = path.join(__dirname, '..','dist','index.js');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const newContent = `import './styles/tailwind.css';\n${indexContent}`;
    fs.writeFileSync(indexPath, newContent);
}

main();