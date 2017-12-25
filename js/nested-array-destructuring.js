'use strict';
function foo () {
	return [1,2,3,[4,5,6]];
}

/*let a,b,c,args;

[
	a,
	b = 42,
	c,
	...args
] = foo() || [];

console.log(a,b,c,args); // 1 2 3 [4,5,6]*/



/*let a,b,c,args,d,e;

[
	a,
	b = 42,
	c,
	[d,,e]
] = foo() || [];

console.log(a,b,c,d,e); // 1 2 3 4,6*/


/**********************************/


/*let a, b;
let x = [a,b] = foo();
console.log(a,b); // 1,2
console.log(x); // [1,2,3,[4,5,6]] */


// SAME RESULT
/*let x;
let [a,b] = x = foo();
console.log(a,b); // 1,2
console.log(x); // [1,2,3,[4,5,6]] */




/* MULTIPLE DESTRUCTURING */
let a,b, args;
let [
	,,,
	[c,d]
] = [
	a,b, ...args
] = foo();

console.log(c,d); // 4,5
console.log(a,b, args); // 1,2 [3, [4,5,6]]