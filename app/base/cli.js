const path = require('path')
const { writeFileSync } = require('fs')
// process.env = {};
require('dotenv').config();
try {
  const filepath = path.join(__dirname, 'types', 'env.d.ts');

  const keys = Object.keys(process.env).map(item => `'${item}'`).join('|\n');

  const data = `export type Env<T> = ${keys} | T;`;

  writeFileSync(filepath, data)
  
  console.log('Env types generated!')
} catch (error) {
  throw error;
}