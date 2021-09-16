const {
  createDirectory,
  writeFile,
  DeleteFile,
  removeDirectory,
} = require('../problem1');

const fileSystemAndRemoving = async () => {
  try {
    let number = Number((Math.random() * 10).toFixed(0));
    let jsonData = JSON.stringify({ name: 'dharmendra', age: 24 });
    const dirname = './RandomJsonFile';

    const msgForDir = await createDirectory(dirname);
    console.log(msgForDir);

    for (let index = 1; index <= number; index++) {
      let filename = `${dirname}/${index}.json`;
      let msgForWrite = await writeFile(filename, jsonData);
      console.log(msgForWrite);
    }

    for (let index = 1; index <= number; index++) {
      let filename = `${dirname}/${index}.json`;
      let msgForDelete = await DeleteFile(filename);
      console.log(msgForDelete);
    }

    let msgForRemoveDir = await removeDirectory(dirname);
    console.log(msgForRemoveDir);
  } catch (error) {
    console.log(error.message);
  }
};

fileSystemAndRemoving();
