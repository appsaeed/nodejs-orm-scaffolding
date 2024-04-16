const path = require('path')
const { writeFileSync } = require('fs')
const color = require('colorette');
// process.env = {};
require('dotenv').config();
try {
  const filepath = path.join(__dirname, 'types', 'env.d.ts');

  const keys = Object.keys(process.env).map(item => `'${item}'`).join('|\n');

  const data = `export type Env<T> = ${keys} | T;`;

  writeFileSync(filepath, data)
  
  console.log(
    color.green('Environments types are generated!'),
    '\n',
    color.green('Types File: ' + filepath.replace(process.cwd(), ''))
  )
} catch (error) {
  throw error;
}