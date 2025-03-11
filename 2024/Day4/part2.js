const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2024/Day4/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  countXmas(data);
});

const countXmas = (data) => {
  const lines = data.split("\r\n");
  let count = 0;
  lines.forEach((line, row) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i].toLowerCase() === "x") {
        count += findM(lines, i, row);
      }
    }
  });
  console.log(`Total XMAS found: ${count}`);
};

const findM = (lines, xIndex, row) => {
  let count = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1], // right, down, down-right, down-left
    [0, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1], // left, up, up-left, up-right
  ];
  directions.forEach(([dx, dy]) => {
    if (isValidDirection(lines, xIndex, row, dx, dy)) {
      count++;
    }
  });
  return count;
};

const isValidDirection = (lines, xIndex, row, dx, dy) => {
  const word1 = "mas";
  const word2 = "sam";
  for (let i = 1; i < word1.length; i++) {
    const newRow1 = row + i * dy;
    const newCol1 = xIndex + i * dx;
    const newRow2 = row - i * dy;
    const newCol2 = xIndex - i * dx;
    if (
      newRow1 < 0 ||
      newRow1 >= lines.length ||
      newCol1 < 0 ||
      newCol1 >= lines[newRow1].length ||
      lines[newRow1][newCol1].toLowerCase() !== word1[i] ||
      newRow2 < 0 ||
      newRow2 >= lines.length ||
      newCol2 < 0 ||
      newCol2 >= lines[newRow2].length ||
      lines[newRow2][newCol2].toLowerCase() !== word2[i]
    ) {
      return false;
    }
  }
  return true;
};
