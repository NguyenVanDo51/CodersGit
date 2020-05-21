var math = {
  add: function(a, b) {
    return a + b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  sum: (a) =>{
  	var s = 0;
  	for(let i of a){
  		s += i;
  	}
  	return s;
  }
};

module.exports = math;
