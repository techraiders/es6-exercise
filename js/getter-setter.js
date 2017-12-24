let attendance = {
	_list: [],
	set addName(name) {
		this._list.push(name);
	},
	get list() {
		return this._list.join(', ');
	}
};

//console.log(attendance);
attendance.addName = 'Joanne';
//console.log(attendance);

console.log("List getter: ", attendance.list); // List getter:  Joanne
console.log("Underscore list (prop)", attendance._list); // Underscore list (prop) ["Joanne"]

attendance.addName = 'Anna';
attendance.addName = 'Charlie';
console.log(attendance.list); // Joanne, Anna, Charlie




class Hike {
	constructor (distance, pace) {
		this.distance = distance;
		this.pace = pace;
	}
	get lengthInHours() {
		return `${this.calcLength()} hours`;
	}
	calcLength () {
		return this.distance / this.pace;
	}
}

console.group('Classes');

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours); // 5 hours

console.groupEnd('Classes');
