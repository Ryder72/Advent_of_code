const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2024/Day1/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  calculateDistance(data);
});

const calculateDistance = (data) => {
  let leftList = [];
  let rightList = [];

  data.split("\n").forEach((line) => {
    leftList.push(Number(line.slice(0, 5)));
    rightList.push(Number(line.slice(7, 13)));
  });

  let counter = 0;
  let total = 0;

  leftList.sort().forEach((number) => {
    let count = rightList.filter((item) => item === number).length;
    total = number * count;
    counter += total;
  });
  console.log(counter);
};
