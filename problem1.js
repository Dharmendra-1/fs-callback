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
    }, 2 * 1000);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fileSystemAndRemoving;
