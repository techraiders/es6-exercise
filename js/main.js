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
*/


/* With asynchronous iteration, the concepts iterable, iterator and iteratorResult work a bit differently. In asynchronous iteration, iterables use the method Symbol.asyncIterator. Instead of returning iterator results directly, the next() method of an async iterator returns a promise. In the code clock below let's try to make the codebeast iterable asynchronous: 

-------------BELOW CODE IS NOT WORKING---------

const codebeast = {
	[Symbol.asyncIterator]: () => {
		const letter = [`c`, `o`, `d`, `e`, `b`, `e`, `a`, `s`, `t`];
		return {
			next: () => Promise.resolve({
				done: letter.length === 0,
				value: letter.shift()
			})
		}
	}
};

// we can carry out our iteration asynchronously using a for... await... of loop:

for (const letter of codebeast) {
	console.log(letter);
}
*/









/* CREATING OUR OWN CUSTOM ITERATOR IN JAVASCRIPT OBJECT*/
const obj = {
	[Symbol.iterator] () {
		let st = this.start, en = this.end, idx = st;

		const it = {
			next: () => {
				if (idx <= en){
					let v = this.values[idx];
					idx++;
					return {value: v, done: false};
				} else {
					return {done: true};
				}
			}
		};
		return it;
	},
	values: [2,4,6,8,10,12,14,16,18,20,22,24,26,28],
	start: 4,
	end: 13
};

let vals = [...obj];
console.log(vals);