// import author, { address } from './DefaultVariable.mjs';
// import sayHello, { sayGoodBye } from './DefaultFunction.mjs';
// import Employee, { Manager } from './DefaultClass.mjs';

import { default as author, address } from './DefaultVariable.mjs';
import { default as sayHello, sayGoodBye } from './DefaultFunction.mjs';
import { default as Employee, Manager } from './DefaultClass.mjs';

console.log(`name: ${author}`);
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
