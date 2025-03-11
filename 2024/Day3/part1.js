const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2024/Day3/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  countXmas(data);
});

const countXmas = (line) => {
  let total = 0;
  let count = 0;
  const regex = /mul\(\d+,\d+\)/g;
  const matches = line.matchAll(regex);

  for (const match of matches) {
    const [num1, num2] = match[0].match(/\d+/g);
    console.log(num1, num2);
    total = num1 * num2;
    count = count + total;
    console.log(total);
    console.log("--------------------");
  }
  console.log(count);
};
