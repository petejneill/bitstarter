var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
var string = fs.readFileSync(index.html,nil);
response.send(string);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
