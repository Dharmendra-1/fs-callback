// Problem 1:
// Using callbacks and the fs module's asynchronous functions, do the following:
// 1. Create a directory of random JSON files
// 2. Delete those files simultaneously
const fs = require('fs');
const path = require('path');

const fileSystemAndRemoving = (data, number) => {
  const dirname = './RandomJsonFile';
  if (Object.keys(data).length === 0 || !number) {
    throw new Error('data is Empty or not a number');
  }

  try {
    fs.mkdir(path.join(__dirname, dirname), (err) => {
      if (err) {
        throw new Error('unable to create directory');
      }
    });

    for (let index = 1; index <= number; index++) {
      fs.writeFile(
        `./RandomJsonFile/${index}.json`,
        JSON.stringify(data),
        'utf-8',
        (error) => {
          if (error) {
            throw new Error('File path is not correct.');
          }
        }
      );
    }

    setTimeout(() => {
      for (let index = 1; index <= number; index++) {
        let filename = path.join(__dirname, dirname, `${index}.json`);

        fs.unlink(filename, (error) => {
          if (error) {
            throw new Error('unable to find file location');
          }
        });
      }

      fs.rmdir(path.join(__dirname, dirname), (error) => {
        if (error) {
          throw new Error('File Does Not Exists ...');
        }
      });
    }, 5000);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fileSystemAndRemoving;
