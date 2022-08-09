const fs = require('fs');
const { fileName } = require('./constants');

module.exports = async function () {
  if (fs.existsSync(fileName)) {
    const fileContent = await fs.promises.readFile(fileName, 'utf-8');
    const json = JSON.parse(fileContent);

    if (json.length === 0) {
      console.log('The file is empty');
    }
    else {
      json.forEach((element, index) => {
        console.log(index, element);
      });
    }
  }
  else {
    console.log('File not found!');
  }
};
