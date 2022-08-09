const fs = require('fs');
const { fileName } = require('./constants');

module.exports = async function (indexStr) {
  // If the file does not exist then its creating it
  if (!fs.existsSync(fileName)) {
    await fs.promises.writeFile(fileName, JSON.stringify([]));
  }

  const fileContent = await fs.promises.readFile(fileName, 'utf-8');
  const json = JSON.parse(fileContent);

  const index = Number(indexStr);
  if (index >= 0 && index < json.length) {
    json.splice(index, 1);
    await fs.promises.writeFile(fileName, JSON.stringify(json));
  }
  else {
    console.log('Sth went wrong');
  }
};
