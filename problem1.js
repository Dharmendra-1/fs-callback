const fs = require('fs');
const path = require('path');

const createDirectory = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.join(__dirname, dirname), (error) => {
      if (error) {
        reject('unable to create directory');
      } else {
        resolve(`${dirname} created sucessfully..`);
      }
    });
  });
};

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

const removeDirectory = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.rmdir(dirname, (error) => {
      if (error) {
        reject(`${dirname} can't delete`);
      } else {
        resolve(`${dirname} is delete`);
      }
    });
  });
};

module.exports = { createDirectory, writeFile, DeleteFile, removeDirectory };
