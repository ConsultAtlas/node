//Simple list of files in a directory

var fs = require('fs');

var dirpath = './'; // any directory
fs.readdir(dirpath, function(err, entries){
  if (err) {
    console.log(err.message);
    return;
  }
  entries.forEach(function(entry){
    console.log('Found file ' + entry);
  });
});
