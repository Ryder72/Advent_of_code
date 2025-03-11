const fs = require("fs");
const { getFilePath } = require("../../utils");
const filePath = getFilePath("/2024/Day3/input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  countXmas(data);
});

const countXmas = (line) => {
  const findAllIndexes = (str, subStr) => {
    const indexes = [];
    let index = str.indexOf(subStr);
    while (index !== -1) {
      indexes.push(index);
      index = str.indexOf(subStr, index + 1);
    }
    return indexes;
  };

  let collectedStrings = "";
  collectedStrings += line.substring(0, 243);

  const doIndexes = findAllIndexes(line, "do()");
  const dontIndexes = findAllIndexes(line, "don't()");

  console.log(`Indexes of 'do()': ${doIndexes}`);
  console.log(`Indexes of 'don't()': ${dontIndexes}`);
  console.log("--------------------");

  let lastDoIndex = -1;
  let lastDontIndex = -1;

  for (let i = 0; i < doIndexes.length; i++) {
    if (
      lastDoIndex !== -1 &&
      doIndexes[i] > lastDoIndex &&
      doIndexes[i] < lastDontIndex
    ) {
      continue;
    }
    for (let j = 0; j < dontIndexes.length; j++) {
      if (doIndexes[i] < dontIndexes[j]) {
        let stringFound = line.substring(doIndexes[i], dontIndexes[j]);
        collectedStrings += stringFound;

        console.log(`${doIndexes[i]} < ${dontIndexes[j]}`);
        lastDoIndex = doIndexes[i];
        lastDontIndex = dontIndexes[j];
        break;
      }
    }
  }

  let total = 0;
  let count = 0;
  const regex = /mul\(\d+,\d+\)/g;
  const matches = collectedStrings.matchAll(regex);

  for (const match of matches) {
    const [num1, num2] = match[0].match(/\d+/g);
    console.log(num1, num2);
    total = num1 * num2;
    count = count + total;
    console.log(total);
    console.log("--------------------");
  }
  console.log(count);

  // console.log("Collected strings:", collectedStrings);
};
