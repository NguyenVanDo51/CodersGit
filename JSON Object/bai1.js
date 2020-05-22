/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var fs = require('fs');

var data = [];
var readFile = () => {
	var dataFile = fs.readFileSync('data.json', {encoding: 'utf8'});
	var arrDataFile = dataFile.split('\n');
	for (let i of arrDataFile){
		if(i !== ""){
			data.push(JSON.parse(i));
		}
	}
	console.log(data);
}
readFile();
console.log(data[0].name);
var me = {name: "Nguyen Van Do", age: 23, lop: "101163"};

fs.appendFileSync('data.json', JSON.stringify(me), function (err) {
	if (err) throw err;
})