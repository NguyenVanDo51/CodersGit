/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

var result = readline.question('Nhập vào mật khẩu: ');
var password = "dodeptrai";
if(result == password){
	console.log("Welcom");
}else{
	console.log("Wrong password");
}

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), 
 	 nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
*/

