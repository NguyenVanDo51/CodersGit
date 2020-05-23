/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readlineSync = require('readline-sync');
var fs = require('fs');

var arrContact = [];

function nhap() {
 	var name_ = readlineSync.question("Enter name: ");
 	var phoneNumber_ = readlineSync.question("Enter phone number: ");
 	return { name: name_, number: phoneNumber_ };
}

function hienThi(arrayContact) {
	console.log("List contact");
	for(let i of arrayContact){
		console.log(i);
	}
}

function taiDuLieu(arrayContact) {
	var allData = fs.readFileSync('data.json', { encoding: 'utf8' }, function(err) {
		if(err) throw err;
		console.log("Loaded data");
	})

	allData = allData.split('\n');
	for(let i of allData){
		if(i !== "")
		arrayContact.push(JSON.parse(i));
	}
}

function luuDuLieu(arrayContact) {
	fs.unlink('data.json', function(err) {
		if(err) throw err;
	});

	for(let i of arrayContact){
		var str = 
		fs.appendFileSync('data.json',JSON.stringify(i) + '\n', function (err) {
			console.log("data saved")
		});
	}
}

taiDuLieu(arrContact);

while (true) {
	// statement
	console.log("Menu\n1.Show all contact\n2.create a new contact\n3.Save in Exit");
	var choose = readlineSync.question("Your choose? ");
	switch (choose) {
		case '1':
			hienThi(arrContact);
			break;

		case '2':
			arrContact.push(nhap());
			break;

		case '3':
			luuDuLieu(arrContact);
			break;
		default:
			break;
	}

	if(choose == '3')
		break;
}