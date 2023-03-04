import { Employee, Manager } from './ClassModule.mjs';

const eko = new Employee('Eko', 'Jakarta');
eko.sayHello('Joko');

const joko = new Manager('Joko', 'Yogyakarta', 'Marketing');
joko.sayHello('Eko');
joko.superSayHello('Eko');

console.log(eko);
console.log(joko);
