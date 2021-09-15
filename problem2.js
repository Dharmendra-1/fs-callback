const fs = require('fs');
const path = require('path');

const fileSystemOperation = () => {
  try {
    fs.readFile(path.join('./lipsum.txt'), 'utf-8', (error, data) => {
      if (error) {
        throw new Error('lipsum.txt file does not exists..');
      } else {
        let upperCaseData = data.toUpperCase();
        console.log('lipsum.txt File Readed..');

        fs.writeFile('fileNames.txt', upperCaseData, 'utf-8', (error) => {
          if (error) {
            throw new Error('File Does Not Exists');
          } else {
            console.log('fileNames.txt File is created..');

            let filePath = path.join(__dirname, 'fileNames.txt');

            fs.readFile(filePath, 'utf-8', (error, data) => {
              if (error) {
                throw new Error(`Error is ${error}`);
              } else {
                let lowerCaseData = JSON.stringify(
                  data.toLowerCase().split('.').join('')
                );

                fs.writeFile(
                  'fileNames.txt',
                  lowerCaseData,
                  'utf-8',
                  (error) => {
                    if (error) {
                      throw new Error('fileNames.txt file does not exists');
                    } else {
                      console.log('fileNames.txt File is created..');

                      fs.readFile('fileNames.txt', 'utf-8', (error, data) => {
                        if (error) {
                          throw new Error('fileNames.txt file does not exists');
                        } else {
                          console.log('Reading fileNames.txt File data..');

                          let sortedData = JSON.stringify(
                            JSON.parse(data).split(' ').sort().join(' ')
                          );

                          fs.writeFile(
                            'fileNames.txt',
                            sortedData,
                            'utf-8',
                            (error) => {
                              if (error) {
                                throw new Error(
                                  'fileNames.txt file is does not exist..'
                                );
                              } else {
                                console.log('fileNames.txt is created ..');

                                fs.readFile(
                                  'fileNames.txt',
                                  'utf-8',
                                  (error, data) => {
                                    if (error) {
                                      throw new Error(
                                        'fileNames.txt file is does not exist..'
                                      );
                                    } else {
                                      console.log(data);

                                      fs.unlink(
                                        path.join(__dirname, 'fileNames.txt'),
                                        (error) => {
                                          if (error) {
                                            console.log(error);
                                          }
                                        }
                                      );
                                    }
                                  }
                                );
                              }
                            }
                          );
                        }
                      });
                    }
                  }
                );
              }
            });
          }
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fileSystemOperation;
