//Use Case 1:

function uniqueId () {
	// unique id generator function
	console.log('!');
}

function foo (id = uniqueId()) {
	
}

foo(1); // uniqueId not called
foo(2); // uniqueId not called
foo(); // !




// Use Case 2:

function required (paramName) {
	throw 'Parameter ' + paramName + ' required!'
}

function bar (param = required('id')) {
	
}