const express = require('express');
const upload = require('./upload');
const cors = require('cors')

var app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(express.static("angular-test-app")); 

app.get('/', function (req, res,next) {
 res.redirect('/'); 
});

app.post('/upload', upload);

app.listen(3000, 'localhost');
console.log("MyProject Server is Listening on port 3000");