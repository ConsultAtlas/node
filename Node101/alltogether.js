var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stout
});

rl.question('Enter a domain name: ', function(name){
  ;
  rl.close();
