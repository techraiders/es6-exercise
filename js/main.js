const iterable = ['x', 'y', 'z', undefined];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
The code block below demonstrates how synchronous iteration works.
iterator.next() {
	value: 'x',
	done: false
}

iterator.next() {
	value: 'y',
	done: false
}

iterator.next() {
	value: 'z',
	done: false
}

iterator.next() {
	value: undefined,
	done true
}*/

