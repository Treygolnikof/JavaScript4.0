function sum(a, b) {
	return a + b > 10;
}

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let num = arr[1][1];

var each = function(startArr, f){return f(startArr)};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr2, myFunc));

let assert = require('chai').assert;

describe('sum', function() {
    it('Возвращает true?', function() {
        assert.equal(sum(2, 2), true);
    });
});

describe('sum', function() {
    it('Возвращает true?', function() {
        assert.equal(sum(2, 2), true);
    });
});