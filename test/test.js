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

let assert = require('chai').assert;

describe('sum', function() {
    it('sum возвращает true?', function() {
        assert.isTrue(sum(10, 2));
    });
});

describe('num', function() {
    it('num равно 5?', function() {
        assert.equal(num, 5);
    });
});

describe('each', function() {
    it('each массив с длинной 5', function() {
        assert.isArray(each(arr2, myFunc));
        assert.deepEqual(each(arr2, myFunc), [ 8, 7, 6, 5, 4 ]);
        assert.lengthOf(each(arr2, myFunc), 5);
    });
});

