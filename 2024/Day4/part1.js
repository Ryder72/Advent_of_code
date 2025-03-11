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
    [0, 1], [1, 0], [1, 1], [1, -1], // right, down, down-right, down-left
    [0, -1], [-1, 0], [-1, -1], [-1, 1] // left, up, up-left, up-right
  ];
  directions.forEach(([dx, dy]) => {
    if (isValidDirection(lines, xIndex, row, dx, dy)) {
      count++;
    }
  });
  return count;
};

const isValidDirection = (lines, xIndex, row, dx, dy) => {
  const word = "xmas";
  for (let i = 1; i < word.length; i++) {
    const newRow = row + i * dy;
    const newCol = xIndex + i * dx;
    if (
      newRow < 0 || newRow >= lines.length ||
      newCol < 0 || newCol >= lines[newRow].length ||
      lines[newRow][newCol].toLowerCase() !== word[i]
    ) {
      return false;
    }
  }
  return true;
};
