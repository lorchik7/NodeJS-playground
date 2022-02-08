const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//app.use(express.static(__dirname + '/public')); // get index.html file

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/:name', (req, res) => {
	res.send("getting root");
});

app.get('/profile', (req, res) => {
	res.send("getting profile");
});

app.post('/profile', (req, res) => {
	console.log(req.body);
	res.send('Success');
});

app.listen(3000);
