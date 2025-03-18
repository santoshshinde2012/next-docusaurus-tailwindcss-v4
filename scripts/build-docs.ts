import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs-extra';

// Path to Docusaurus project
const DOCUSAURUS_PATH = path.join(__dirname, '../docusaurus');
// Path where we want to copy the built files
const OUTPUT_PATH = path.join(__dirname, '../public/docs');

console.log('Building Docusaurus project...');

// Run the build command in the Docusaurus directory
execSync('npm run build', { 
  cwd: DOCUSAURUS_PATH,
  stdio: 'inherit'
});

// Ensure the output directory exists and is empty
fs.emptyDirSync(OUTPUT_PATH);

// Copy the built files to the public directory
console.log('Copying built files to public/docs...');
fs.copySync(
  path.join(DOCUSAURUS_PATH, 'build'),
  OUTPUT_PATH
);

console.log('Docusaurus build complete and files copied to public/docs');