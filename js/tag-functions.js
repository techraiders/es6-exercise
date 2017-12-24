/* Tag function serves kind of like a pre processors, it's like a macro */

/*function foo (strings, ...values) {
	console.log(strings); // ["Hello, ", ", your order (#", ") was $", ".", raw: Array(4)]
	console.log(values); // ["Kyle", "123", 319.7]
	return 'I am evil';
}*/

function foo (strings, ...values) {
	let str = '';
	for (let i = 0; i < strings.length; i++) {
		if (i) str += values[i - 1];
		str += strings[i];
	}
	return str;
}

let name = 'Kyle';
let orderNumber = '123';
let total = 319.7;

let msg = foo`Hello, ${name}, your \
order (#${orderNumber}) was $${total}.`;

//console.log(msg); // 'I am evil'
console.log(msg); // 'Hello, Kyle, your order (#123) was $319.7.'