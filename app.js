const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build1')));
app.use(express.static(path.join(__dirname, 'build2')));


app.get('/build1/*', function (req, res) {
	console.log("request for build1");
  res.sendFile(path.join(__dirname, 'build1', 'index.html'));
});
app.get('/build2/*', function (req, res) {
	console.log("request for build2");
  res.sendFile(path.join(__dirname, 'build2', 'index.html'));
});

app.listen(9000);