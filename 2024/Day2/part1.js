const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2024/Day2/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  findSafeReports(data);
});

const findSafeReports = (data) => {
  let count = 0;

  data.split("\n").forEach((line) => {
    const numbers = line.split(" ").map(Number);
    let results = [];

    for (let i = 0; i < numbers.length - 1; i++) {
      const num1 = numbers[i];
      const num2 = numbers[i + 1];
      results.push(num1 - num2);
    }

    const validNumbers = [-3, -2, -1, 1, 2, 3];
    const isValid = results.every((num) => validNumbers.includes(num));
    const allIncreasing = results.every((num) => num < 0);
    const allDecreasing = results.every((num) => num > 0);

    if (isValid && (allIncreasing || allDecreasing)) {
      count++;
    }
  });
  console.log(count);
};
