const fs = require('fs');
const path = require('path');

const writeFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, 'utf-8', (error) => {
      if (error) {
        reject('File path is not correct.');
      } else {
        resolve(`${filename} is created sucessfully..`);
      }
    });
  });
};

const DeleteFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, (error) => {
      if (error) {
        reject('File Not delete..');
      } else {
        resolve(`${filename} is Deleted`);
      }
    });
  });
};

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (error, data) => {
      if (error) {
        reject(`Error is ${error}`);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { writeFile, readFile, DeleteFile };
