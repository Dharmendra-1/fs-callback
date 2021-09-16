const { writeFile, readFile, DeleteFile } = require('../problem2');
const path = require('path');

const fileSystemOperation = async () => {
  try {
    let dataOfLipsum = await readFile('lipsum.txt');
    let upperCaseData = dataOfLipsum.toUpperCase();

    await writeFile('fileNames.txt', upperCaseData);

    let dataOfWriteFile = await readFile('fileNames.txt');
    let lowerCaseData = JSON.stringify(
      dataOfWriteFile.toLowerCase().split('.').join('')
    );

    await writeFile('fileNames.txt', lowerCaseData);

    let dataOfLowerCase = await readFile('fileNames.txt');
    let sortedData = JSON.stringify(
      JSON.parse(dataOfLowerCase).split(' ').sort().join(' ')
    );

    await writeFile('fileNames.txt', sortedData);

    let finalDataOfFile = await readFile('fileNames.txt');

    console.log(finalDataOfFile);

    await DeleteFile('fileNames.txt');
  } catch (error) {
    console.log(error.message);
  }
};

fileSystemOperation();
