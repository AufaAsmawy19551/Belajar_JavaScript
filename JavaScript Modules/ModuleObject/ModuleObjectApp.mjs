// import { name, address, sayHello, sayGoodBye, Employee, Manager } from './ModuleObject.mjs.mjs';
import * as ModuleObject from './ModuleObject.mjs';

console.log(`name: ${ModuleObject.name}`);
console.log(`address: ${ModuleObject.address}`);

ModuleObject.sayHello('Eko');
ModuleObject.sayGoodBye('Eko');

const eko = new ModuleObject.Employee('Eko', 'Jakarta');
eko.sayHello('Joko');

const joko = new ModuleObject.Manager('Joko', 'Yogyakarta', 'Marketing');
joko.sayHello('Eko');
joko.superSayHello('Eko');

console.log(eko);
console.log(joko);
