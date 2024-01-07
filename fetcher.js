const fs = require('fs');
const request = require('request');

const [, , siteURL, filePath] = process.argv;

if (!filePath) {
  console.error('Error: Invalid file path');
  process.exit(1);
}

request(siteURL, (error, response, body) => {
  if (error) {
    console.error('Failed to fetch data:', error);
    process.exit(1); 
  }

  fs.writeFileSync(filePath, body);

  const bytes = body.length;

  console.log(`Downloaded and saved ${bytes} bytes to ${filePath}.`);
  
});
