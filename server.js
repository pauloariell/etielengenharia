//Install express server
const express = require('express');
const path = require('path');

const app = express();

//serve only the static files form the dist directory
//Replace the 'dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/Etielengenharia'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Etielengenharia/index.html'));
});

app.listen(process.env.PORT || 8080);