import * as AggregateModule from './AggregateModule.mjs';

console.log(`name: ${AggregateModule.name}`);
console.log(`address: ${AggregateModule.address}`);

AggregateModule.sayHello('Eko');
AggregateModule.sayGoodBye('Eko');

const eko = new AggregateModule.Employee('Eko', 'Jakarta');
eko.sayHello('Joko');

const joko = new AggregateModule.Manager('Joko', 'Yogyakarta', 'Marketing');
joko.sayHello('Eko');
joko.superSayHello('Eko');

console.log(eko);
console.log(joko);