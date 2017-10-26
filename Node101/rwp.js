// Request a web page

var request = require('request');

var url = 'https://www.grassrootslabs.io';
request.get(url, function(err, resp, html) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(html);
});
