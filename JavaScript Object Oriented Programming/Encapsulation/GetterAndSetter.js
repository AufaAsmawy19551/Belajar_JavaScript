class Employee {
  #name;
  #address;
  constructor(name, address) {
    this.#name = name;
    this.#address = address;
  }

  sayHello(name) {
    console.log(`Hello ${name}, My name is Employee ${this.name}`);
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    if(name){
      this.#name = name;
    }
  }

  get address() {
    return this.#address;
  }

  set address(address) {
    if(address){
      this.#address = address;
    }
  }
}

const eko = new Employee('Eko', 'Jakarta');
console.log(eko.name);
console.log(eko.address);

eko.name = ''
eko.address = ''

console.log(eko.name);
console.log(eko.address);

eko.name = 'Joko'
eko.address = 'Yogyakarta'

console.log(eko.name);
console.log(eko.address);

eko.sayHello('Eko');

console.log(eko);
