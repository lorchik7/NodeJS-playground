const fs = require('fs');

//READ
fs.readFile("./hello.txt", (err, data) => {
	if(err) {
		console.log('This is my brand new error message!');
	}
	console.log('Async', data.toString('utf8'));
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
// 	if(err) {
// 		console.log(err);
// 	}
// });

//WRITE
fs.writeFile('bye.txt', 'Sad to see you go!', err => {
	if(err) {
		console.log("Error");
	}
});

//DELETE
fs.unlink('./bye.txt', err => {
	if(err) {
		console.log(err);
	}
	console.log("Inception")
});