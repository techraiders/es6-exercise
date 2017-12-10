/*
Generators: These are mainly used to represent sequences that could possibly be infinite. Generators can also be thought of as processes that you can resume and pause. The syntax of generators is thus:
*/

function* getFunc () {
	console.log('One');
	yield;
	console.log('Two');
}

/*
Where function* is a new keyword user for generator functions, yield is an operator which is a generator can use to pause itself and also use to receive input and send output. Enough said, let's proceed to work with generators. The code block below uses a generator to return positive integers.
*/

/* IT SHOULD PAUSE AT EACH YIELD, AND WAIT TILL ANOTHER VALUE IS ASKED FOR. THIS MEANS the for... of LOOP KEEPS ON EXECUTING SINCE OUT INTEGER LIST IS INFINITE. THIS BRINGS A HOST OF POSSIBILITIES THAT CAN HELP US IMPLEMENT ASYNCHRONOUS OPERATIONS SUCH AS LOOPS AND CONDITIONALS IN OUR FUNCTIONS. */

/********** BELOW CODE NOT WORKING AS EXPECTED 
function* countUp () {
	for (var i = 0; i <= 5; i++) {
		yield i
	}
}

for (var i of countUp()) {
	console.log(i);
}
/*
Outrightly, generators don't have a way of representing results of asynchronous operations. To do that, they have to work with promises. Speaking of promises, let's see how we can iterate through a generator function using the .next method:
*/


//-------------------------------------------------
function* race() {
	var lap1 = yield 20;
	console.assert(lap1 === 35, 'lap1 is not 35');
	return 55;
}

var r = race();
var lap2 = r.next();
console.log(lap2); // {value: 20, done: false}

var lap3 = r.next(35);
console.log(lap3); // {value: 55, done: true}

/*
Explanation: In the example above, r.next() is called once to get it to the yield and then called a second time and passed a value which is the result of the yield expression. This way, race() can then proceed to return statement to return a final result. This can be implemented by calling .next(result) to show that a promise has been fulfilled with result.
*/