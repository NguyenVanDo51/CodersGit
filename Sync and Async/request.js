const request = require('request');
console.time("time this");
request('https://randomuser.me/api/', function(error, response, body){
	console.error('error: ', error);		//print the error if one occurred
	console.log('statusCode: ', response && response.statusCode); // print response status code if a response was received
	console.log('body', body); //print the html for the google homepage
})
console.timeEnd("time this11");