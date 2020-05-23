var fs = require('promise-fs');

var consoleData = function() {
	console.log(song);
}

var readFile = function(path){
	return fs.readFile(path, { encoding: 'utf8'});
}

var readFile2 = function(){
	return fs.readFile('./song3.txt', { encoding: 'utf8'});
}

readFile('./song1.txt')
	.then(consoleData)

	.then (function() {
		return readFile('./song2.txt');
	})
	.then (consoleData)

	.then (readFile2)
	.then (consoleData)

	.catch(function(error){
		console.log(error);
	});