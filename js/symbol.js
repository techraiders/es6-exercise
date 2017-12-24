/*const id = Symbol(); // you can't invove it as constructor, you have to call it as simple function

const courseInfo = {
	// id: 'js_course',
	title: 'ES6',
	topics: ["babel", "syntax", "functions", "classes"]
};

courseInfo[id] = 41284;

//console.log(courseInfo.id); // undefined
console.log(courseInfo[id]); // 41284
console.log(courseInfo); // {title: "ES6", topics: Array(4), Symbol(): 41284}


// Symbol() avoids naming conflict, if another developer adds a property 'id' to the courseInfo object as our object remains intact below:

courseInfo.id = 'js_course';
console.log(courseInfo); // {title: "ES6", topics: Array(4), id: "js_course", Symbol(): 41284}*/


// The symbol function optionally takes the string value, that works as label for debugging.
const x = Symbol('Whatever description you want only for debugging perspective.');

const y = x;
console.assert(x == y);
console.assert(x === y);

const z = Symbol('Whatever description you want only for debugging perspective.');

console.assert(z == y, 'z and y are not abstract equal.');
console.assert(z === y, 'z and y are not strictly equal.');

const xy = Symbol('Whatever');

let obj = {
	id: 42
};

obj[xy] = 'This is the un-guessable unique value';

console.log(obj); // {id: 42, Symbol(Whatever): "This is the un-guessable unique value"}
console.log(Object.keys(obj)); // ["id"]
console.log(Object.getOwnPropertyNames(obj)); // ["id"]
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(Whatever)]