const { writeFile, readFile, DeleteFile } = require('../problem2');
const path = require('path');

const fileSystemOperation = () => {
  readFile('lipsum.txt')
    .then((data) => {
      let upperCaseData = data.toUpperCase();
      return writeFile('fileNames.txt', upperCaseData);
    })
    .then((msg) => {
      console.log(msg);
      return readFile('fileNames.txt');
    })
    .then((data) => {
      let lowerCaseData = JSON.stringify(
        data.toLowerCase().split('.').join('')
      );
      return writeFile('fileNames.txt', lowerCaseData);
    })
    .then((msg) => {
      console.log(msg);
      return readFile('fileNames.txt');
    })
    .then((data) => {
      let sortedData = JSON.stringify(
        JSON.parse(data).split(' ').sort().join(' ')
      );

      return writeFile('fileNames.txt', sortedData);
    })
    .then((msg) => {
      console.log(msg);
      return readFile('fileNames.txt');
    })
    .then((data) => {
      console.log(data);
      return DeleteFile('fileNames.txt');
    })
    .then((msg) => {
      console.log(msg);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

fileSystemOperation();
