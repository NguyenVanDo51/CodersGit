/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

 var search = (x, y) => {
 	let i = 1000;
 	while(i > 0){
 		if(i % x === 0 && i % y === 0){
 			return i;
 		}
 		i--;
 	}
 	return undefined;
 };

 console.log(search(3,5));
 console.log(search(3,50));
 console.log(search(200,400));
 console.log(search(35,50));