const fileSystemAndRemoving = require('../problem1');

let number = Math.random();
let data = { name: 'dharmendra', age: 24 };

try {
  fileSystemAndRemoving(data, Number((number * 10).toFixed(0)));
} catch (error) {
  console.log(error.message);
}
