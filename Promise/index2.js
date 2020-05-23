var fs = require("fs");

// function readFilePromise(path) {
//   return new Promise(function(resolve, reject) {
//     fs.readFile(path, { encoding: "utf8" }, function(err, data) {
//       if (err) reject(err);
//       else {
//         resolve(data);
//       }
//     });
//   });
// }

function readFilePromise(path){
  return new Promise(function(resolve, reject){
    var data ="HIHI I'm in resolve";
    var data2 = Math.random(1,10);
  })
}

readFilePromise("song1.txt") // khi goi readFilePromise thi se tra ve 1 promise
  .then(function(song1) {
    // then() la goi den resolve cua promise
    console.log(song1);
  })
  .then(function(){
    return readFilePromise('aa');
  })
  .then(function(song2){
    console.log(song2);
  })
  .catch(function(err) {
    // catch() la goi den reject() cua promise
    console.log(err + "hihi");
  });
