const path = require("path");

const getFilePath = (fileName) => {
  return path.join(__dirname, fileName);
};

module.exports = { getFilePath };
