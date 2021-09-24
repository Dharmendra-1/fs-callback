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

        fs.writeFile('UpperCase.txt', upperCaseData, 'utf-8', (error) => {
          if (error) {
            throw new Error('File Does Not Exists');
          } else {
            console.log('UpperCase.txt File is created..');

            let filePath = path.join(__dirname, 'UpperCase.txt');

            fs.readFile(filePath, 'utf-8', (error, data) => {
              if (error) {
                throw new Error(`Error is ${error}`);
              } else {
                let lowerCaseData = JSON.stringify(
                  data.toLowerCase().split('.').join('')
                );

                fs.writeFile(
                  'LowerCase.txt',
                  lowerCaseData,
                  'utf-8',
                  (error) => {
                    if (error) {
                      throw new Error('LowerCase.txt file does not exists');
                    } else {
                      console.log('LowerCase.txt File is created..');

                      fs.readFile('LowerCase.txt', 'utf-8', (error, data) => {
                        if (error) {
                          throw new Error('LowerCase.txt file does not exists');
                        } else {
                          console.log('Reading fileNames.txt File data..');

                          let sortedData = JSON.stringify(
                            JSON.parse(data).split(' ').sort().join(' ')
                          );

                          fs.writeFile(
                            'sortedData.txt',
                            sortedData,
                            'utf-8',
                            (error) => {
                              if (error) {
                                throw new Error(
                                  'sortedData.txt file is does not exist..'
                                );
                              } else {
                                console.log('sortedData.txt is created ..');

                                fs.readFile(
                                  'sortedData.txt',
                                  'utf-8',
                                  (error, data) => {
                                    if (error) {
                                      throw new Error(
                                        'sortedData.txt file is does not exist..'
                                      );
                                    } else {
                                      console.log(data);
                                      let arr = [
                                        'LowerCase.txt',
                                        'UpperCase.txt',
                                        'sortedData.txt',
                                      ];
                                      arr.forEach((file) => {
                                        fs.unlink(
                                          path.join(__dirname, file),
                                          (error) => {
                                            if (error) {
                                              console.log(error);
                                            }
                                          }
                                        );
                                      });
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
