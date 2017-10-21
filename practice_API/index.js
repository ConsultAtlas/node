const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// create a route that returns a json object that is
// simply this { 'status' : 'on'}
// the route should be /status
// the verb should be a GET

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
