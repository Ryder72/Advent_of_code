const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2023/Day1/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  let counter = 0;
  data.split("\n").forEach((word) => {
    const number = Number(findNumber(word));
    counter += number;
  });
  console.log(counter);
});

const findNumber = (word) => {};
