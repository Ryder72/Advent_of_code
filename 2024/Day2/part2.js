const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2024/Day2/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  const reports = data
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
  const safeReportCount = countSafeReports(reports);
  console.log(safeReportCount);
});

const isSafeReport = (line) => {
  const validNumbers = [-3, -2, -1, 1, 2, 3];
  const results = [];
  for (let i = 0; i < line.length - 1; i++) {
    results.push(line[i] - line[i + 1]);
  }

  for (let j = 0; j < line.length; j++) {
    const dampenedReport = line.slice(0, j).concat(line.slice(j + 1));
    const dampenedResults = [];
    for (let i = 0; i < dampenedReport.length - 1; i++) {
      dampenedResults.push(dampenedReport[i] - dampenedReport[i + 1]);
    }
    const dampenedIsValid = dampenedResults.every((num) =>
      validNumbers.includes(num)
    );
    const dampenedAllIncreasing = dampenedResults.every((num) => num < 0);
    const dampenedAllDecreasing = dampenedResults.every((num) => num > 0);
    if (dampenedIsValid && (dampenedAllIncreasing || dampenedAllDecreasing)) {
      return true;
    }
  }
};

const countSafeReports = (reports) => {
  let count = 0;
  for (const report of reports) {
    if (isSafeReport(report)) {
      count++;
    }
  }
  return count;
};
