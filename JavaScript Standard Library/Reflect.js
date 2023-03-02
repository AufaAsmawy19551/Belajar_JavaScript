const person = {};

Reflect.set(person, 'firstName', 'Muhammad');
Reflect.set(person, 'middleName', 'Aufa');
Reflect.set(person, 'lastName', 'Asmawy');

console.log(person);

console.log(Reflect.get(person, 'firstName'));
console.log(Reflect.get(person, 'middleName'));
console.log(Reflect.get(person, 'lastName'));

console.log(Reflect.has(person, 'firstName'));
console.log(Reflect.has(person, 'middleName'));
console.log(Reflect.has(person, 'lastName'));
