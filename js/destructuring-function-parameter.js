function foo ([a,b,c] = []) {
	console.log(a,b,c);
}

//foo(1,2,3); // Uncaught TypeError: Invalid attempt to destructure non-iterable instance

foo([1,2,3]); // 1,2,3


function baar ({a,b,c}) {
	console.log(a,b,c);
}

baar({a: 1, b: 2, c: 3}); // 1,2,3