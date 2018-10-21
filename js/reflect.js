CASE1: 
class Person {
  constructor (name) {
    this.name = name;
  }
}

let person = Reflect.construct(Person, ['Max']);
console.log(person); // {name: 'Max'};
console.log(person.__proto__ == Person.__proto__); // true


CASE 2:
class Person {
  constructor (name) {
    this.name = name;
  }
}

function TopObj () {
  this.age = 27;
}

let person = Reflect.construct(Person, ['Max'], TopObj);
console.log(person); // {name: 'Max'};
console.log(person.__proto__ == TopObj.prototype); // true
