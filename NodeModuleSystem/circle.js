function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

Circle.prototype.isOverlapped = function(a) {
  // tinh khoang cach 2 diem la tam cua 2 duong tron
  var d = Math.sqrt(Math.pow(a.x - this.x, 2) + Math.pow(a.y - this.y, 2));
  // So sanh khoang cach voi 2 ban kinh
  var s = this.radius + a.radius;
  if (d === s) {
    // tong 2 ban kinh = khoang cach thi chung tiep xux nhau
    return 0;
  } else if (d > s) {
    return 1;
  }

  return -1; /// truong hop cuoi la d < s =>> 2 duong tron cat nhau
};

module.exports = Circle;
