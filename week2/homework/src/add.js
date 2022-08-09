const fs = require('fs');
const { fileName } = require('./constants');

module.exports = async function (todo) {
  // If the file does not exist then its creating it
  if (!fs.existsSync(fileName)) {
    await fs.promises.writeFile(fileName, JSON.stringify([]));
  }

  const fileContent = await fs.promises.readFile(fileName, 'utf-8');
  const json = JSON.parse(fileContent);
  json.push(todo);
  await fs.promises.writeFile(fileName, JSON.stringify(json));
};
