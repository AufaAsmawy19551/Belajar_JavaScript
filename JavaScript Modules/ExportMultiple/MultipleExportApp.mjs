import { name, address, sayHello, sayGoodBye, Employee, Manager } from './MultipleExport.mjs';

console.log(`name: ${name}`);
console.log(`address: ${address}`);

sayHello('Eko');
sayGoodBye('Eko');

const eko = new Employee('Eko', 'Jakarta');
eko.sayHello('Joko');

const joko = new Manager('Joko', 'Yogyakarta', 'Marketing');
joko.sayHello('Eko');
joko.superSayHello('Eko');

console.log(eko);
console.log(joko);
