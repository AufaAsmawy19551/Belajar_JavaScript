//Global variable
let a = 'global a';

function first() {
  //Local variable
  let b = 'first local b';
  console.log(a); //global a
  console.log(b); //first local b
}

function second() {
  //Local variable
  let b = 'second local b';
  console.log(a); //global a
  console.log(b); //second local b
}

first();
second();

console.log(a); //global a
//console.log(b); //not defined
