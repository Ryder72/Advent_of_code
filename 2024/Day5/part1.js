const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2024/Day5/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  countPositions(data);
});

const countPositions = (data) => {
  const lines = data.split("\r\n");

  lines.forEach((line, row) => {
    console.log(line);
  });
};

//todo finish it
