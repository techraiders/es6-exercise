// function foo () {
// 	return {a: 1, b: 2, c: 3};
// }

//let {a: a, b: b, c: c} = foo();
//console.log(a, b, c); // 1, 2, 3

//let {a,b,c} = foo();
//console.log(a,b,c); // 1, 2, 3

//let {a, b: X, c} = foo();
//console.log(a,X,c); // 1, 2, 3
//console.log(a,b,c); // Uncaught ReferenceError: b is not defined

//let {a = 10, b: X = 41, c} = foo();
//console.log(a,X,c); // 1, 2, 3

// let {a = 10, b: X = 42, c} = {b: 2};
// console.log(a, X, c); // 10, 2, undefined




// NESTED OBJECT DESTRUCTURING

// function foo () {
// 	return {a: 1, b: 2, c: 3, d: {e: 4}};
// }

// let {a = 10, b: X = 42, c, d: {e}} = foo();
// console.info(a, X, c, e); // 1,2,3,4





//PROBLEM: If variables were already declared, we can't start object destructuring with opening curly brace, this produces syntax error:

// SOLUTION: In this case, Enclose the complete object destructuring statement into parenthesis.

let a, X, c, e;

({a = 10, b: X = 42, c, d: [e] = []
} = {a: 1, b: 2, c: 3, d: [4]});

console.log(a, X, c, e); // 1, 2, 3, 4