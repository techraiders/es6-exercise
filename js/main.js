/*
Asynchronous iteration works almot like synchronous iteration except that it involves promises.
The need for iterating through asynchronous data sources brought about asynchronous iteration.
The code block below can not return its data asynchronously.

const codebeast = {
	[Symbol.iterator]: () => {
		const letter = [`c`, `o`, `d`, `e`, `b`, `e`, `a`, `s`, `t`];
		return {
			next: () => ({
				done: letter.length === 0,
				value: letter.shift()
			})
		}
	}
};

// We can iterate through the codebeast object using a for... of loop

for (const letter of codebeast) {
	console.log(letter);
}



/*const iterable = ['x', 'y', 'z', undefined];
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