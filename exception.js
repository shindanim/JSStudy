/* Raise exception */
const add = function (a, b) {
	console.log(`a type is : ${typeof a}`);
	console.log(`b type is : ${typeof b}`);
	
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add proper numbers'
		};
	}
	return a + b;
};

const try_it = function () {
	try {
		add(3, 6);
	} catch (e) {
		console.log(`error name: ${e.name}, message: ${e.message}`);
	} 
}

try_it();


/* prototype function add */ /* important !! 잘 이해가 안된*/
Function.prototype.method = function(name, func) {
	// Add function if same name function is not exist
	if(!this.prototype[name]) {
	    this.prototype[name] = func;
    } else {
    	throw {
			name: 'FuctionAlreadyExsits',
			message: 'function with same name already exists'
    	};
    }
	return this;
};

Number.method('integer', function () {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10/3).integer());

//console.log(`${typeof 1.toString()}`);

console.log(`${typeof (1).toString()}`);



