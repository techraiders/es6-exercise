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


/*-------------------------------------------------
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

But what if our promise that is yield is rejected? We can show this by using the .throw(error) method:
*/

var shortcut = new Error('too fast');
function* race() {
	try {
		yield 100;
	} catch (h) {
		console.assert (h === shortcut, 'h is not equal to the error "too fast".');
	}
}

var r = race();
r.next(); // {value: 100, done: false}
r.throw(shortcut);
/*
Just as in the previous example, r.next() is called to obtain the first yield keyword. we use r.throw(error) to signal rejection as it causes our generator to behave like an error was thrown by yield. This automatically triggers the catch block.
*/




/*
Let's take one more example where we attempt two-way communication with generators. Here next() can actually assign values which are received from the generator:

function* techInterview () {
	const answer = yield 'Who is the CEO of Tesla?';
	console.log(answer);

	if (answer !== 'Elon Musk') return 'No Way!'
  return 'Okay, on the next question';
}

{
	const Iterator = techInterview();
	const q = Iterator.next().value; // Iterator yields question
	console.log(q); // Who is the CEO of Tesla?
  const a = Iterator.next('Scott Hanselmann').value; // Scott Hanselmann
  console.log(a); // No Way!
}

{
	const Iterator = techInterview();
	const q = Iterator.next().value; // Iterator yields another question
	console.log(q); // Who is the CEO of Tesla?
	const a = Iterator.next('Jimmy Kimmel').value; // Jimmy Kimmel
	// Pass wrong answer back into generator
	console.log(a); // No Way!
}

{
	const Iterator = techInterview();
	const q = Iterator.next().value; // Iterator yields another question
	console.log(q); // Who is the CEO of Tesla?
	const a = Iterator.next('Elon Musk').value; // Elon Musk
	console.log(a); // Okay on to the next question
}*/





/* GENERATORS CREATING ITERATOR BY KYLE SIMPSON */

function *main () {
	console.log('hello');
	yield 9;
	console.log('world');
	yield 10;
}

const it = main();
//console.log(it); // Generator {_invoke: ƒ}

console.log(it.next());
/* Output:
    hello
		{value: 9, done: false}*/

console.log(it.next());
/* Output:
		world
		{value: 10, done true} */


for (let v of main()) {
	console.log(v);
}