function foo () {
	return [1];
}

//var [a,b,c] = foo();
//console.log(a,b,c); // 1, undefined, undefined

// let [a,b = 42, c] = foo();
//console.log(a,b,c); // 1,42,undefined

/*******************************************/

function bar () {
  return null;
}
/*let [x,y,z] = bar(); // Invalid attempt to destructure non-iterable instance
*/

//let [x,y,z] = bar() || []; // Prevents crash / exception

/**********************************************/

function baaz () {
	return [1,2,3,4,5,6,7,8,9];
}
 
let [p,q,r, ...rest] = baaz();
//console.log(p,q,r,rest); // 1 2 3, [4, 5, 6, 7, 8, 9]

/*******************************************/

let l, m, n;
[l, m, n] = baaz();

//console.log(l,m,n); // 1,2,3

/********************************************/

let o = {};
[o.a, o.b, o.c, ...o.args] = baaz();
//console.log(o); // {a: 1, b: 2, c: 3, args: [4,5,6,7,8,9]}


/* SWAPPING VALUE USING DESTRUCTURING */
//let x = 10, y = 20;
//[x,y] = [y,x];
//console.log(x,y); // 20, 10


/******************************************/

let a = [1,2,3];
//[x,y, ...a] = [0,...a,4];
// console.log(a); // 2,3,4

[ , , ...a] = [0, ...a, 4];
console.log(a); // 2,3,4