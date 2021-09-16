const {
  createDirectory,
  writeFile,
  DeleteFile,
  removeDirectory,
} = require('../problem1');

const fileSystemAndRemoving = () => {
  let number = Number((Math.random() * 10).toFixed(0));
  let jsonData = JSON.stringify({ name: 'dharmendra', age: 24 });
  const dirname = './RandomJsonFile';

  createDirectory(dirname)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error.message));

  for (let index = 1; index <= number; index++) {
    let filename = `${dirname}/${index}.json`;
    writeFile(filename, jsonData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  for (let index = 1; index <= number; index++) {
    let filename = `${dirname}/${index}.json`;
    DeleteFile(filename)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  removeDirectory(dirname)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

fileSystemAndRemoving();
