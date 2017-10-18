fs = require('fs')

fs.watch('/Users/z_man/digitalcrafts/node/tmp/hey.txt',
  { encoding: 'buffer' },
  (eventType, filename) => {
    if (filename) {
      console.log(filename);
      // Prints <Buffer....>
    }
  });
