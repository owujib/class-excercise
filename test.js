const fs = require('fs');
const path = require('path');

const products = fs.readFileSync(
  path.join(__dirname, '/MOCK_DATA.json'),
  'utf-8'
);

console.log(products);
