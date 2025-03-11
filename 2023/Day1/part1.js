const fs = require("fs");
const { getFilePath } = require("../../utils");

const filePath = getFilePath("/2023/Day1/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  let counter = 0;
  data.split("\n").forEach((word) => {
    const number = Number(findNumber(word));
    counter = counter + number;
  });
  console.log(counter);
});

const findNumber = (word) => {
  let numberOne;
  let numberTwo;
  while (!Number(numberOne)) {
    word.split("").forEach((char) => {
      if (Number(char) && !numberOne) {
        numberOne = char;
      }
    });
  }

  const matchTwo = word.match(/\d(?!.*\d)/);
  if (matchTwo) {
    numberTwo = matchTwo[0];
  }
  return `${numberOne}${numberTwo}`;
};
