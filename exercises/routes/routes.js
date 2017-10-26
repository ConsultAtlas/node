let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stout
});

rl.question('What is your name?', function(name){
  console.log('Hello, ' + name + '!');
  rl.close();
});

rl.question('What year where you born?', function(year){
  console.log('You were born in ' + year + '!');
  rl.close();
});
