var myDog = { name: "jonh", age: "1", dead: false};

// chuyen sang file kieu json
var myDogString = JSON.stringify(myDog);

var myCatString = '{ "name": "Tom", "age": "1", "dead": "true"}';

var myCat = JSON.parse(myCatString);

/* 	Bai tap
		1. Show all students
		2. Create a new student
		3. Save & Exit
		save to ./data.json
*/
var readlineSync = require('readline-sync');
var fs = require("fs")

var arrStudent = [];

function load(){
	arrStudent = [];
	console.log("load")
	var stringAllStudent = fs.readFileSync("data.json", { encoding: "utf8"});
	console.log(stringAllStudent);
	var arrString = stringAllStudent.split('\n');
	for(let i of arrString){
		if(i !== ""){
			var stringStudent = JSON.parse(i);
			arrStudent.push(stringStudent);
		}
	}
}

// tao mang student

function show(arrayObject){
	console.log("Thong tin sinh vien:");
	for(let i of arrayObject){
		console.log(i);
	}
}
// tao function tao sv moi
function newStudent() {
	var name_ = readlineSync.question('What is your name?');
	var age_ = readlineSync.question('How old are you?');
	var class_ = readlineSync.question('Your class?');
	var student_ = {name : name_, age: age_, lop: class_};
	arrStudent.push(student_);
}

// function save
function saveData(student){
	fs.unlink('data.json', function (err) {
		if(err) throw err;
	});

	for(let i of student){
		try{
			var data = JSON.stringify(i) + "\n";
			fs.appendFileSync('data.json', data);
		}catch(err) {	}
	}
}
load(arrStudent);
while(true){
	console.log("Menu:\n1.Reset\n2.Show\n3.New Student\n4.Save");
	var chose = readlineSync.question('chosee?\t\t\t');
	switch (chose) {
		case '1':
			load(arrStudent);
			break;
		case '2':
			show(arrStudent);	
			break;
		case '3':
			newStudent();
			break;
		case '4':
			saveData(arrStudent);
			break;
		default:
			break;
}
}

