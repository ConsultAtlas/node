// Simple DNS lookup

var dns = require('dns');
var host = 'grassrootslabs.io'; // any host

dns.lookup(host, function(err, ip){
  console.log('IP address is: ', ip);
});
