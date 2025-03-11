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
    leftList.push(line.slice(0, 5));
    rightList.push(line.slice(7, 13));
  });
  leftList.sort();
  rightList.sort();
  let counter = 0;
  let e = 0;
  for (let i = 0; i < leftList.length; i++) {
    e = leftList[i] - rightList[i];
    if (e < 0) {
      e = e * -1;
    }
    counter = counter + e;
  }
  console.log(counter);
};
