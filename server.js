var express = require('express')
var app = express();
app.use(express.static('css'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html')

})

app.listen(3000,()=>{console.log('server is running on port 3000')});
