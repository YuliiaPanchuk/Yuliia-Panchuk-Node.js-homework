const fs = require('fs');
const { fileName } = require('./constants');

module.exports = async function () {
  await fs.promises.writeFile(fileName, JSON.stringify([]));
};
