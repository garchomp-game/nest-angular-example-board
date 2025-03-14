const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.prepare = 'husky';
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
