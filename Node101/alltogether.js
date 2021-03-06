var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stout
});

rl.question('Enter a domain name: ', function(domain){
  dns.lookup(domain, function(err, ipAddress){
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(domain + 's IP address is: ', ipAddress);
    rl.question('Enter a file name: ', function(filename){
      var url = 'http://' + domain;
      request.get(url, function(err, response, html) {
        if (err) {
          console.log(err.message);
          return;
        }
        fs.writeFile(filename, html, function(err){
          if (err) {
            console.log(err.message);
            return;
          }
          console.log('Wrote file '+ filename + '.');
          rl.close();
        });
      });
    });
  });
});
