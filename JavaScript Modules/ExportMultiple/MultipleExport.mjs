const name = 'Muahammad Aufa Asmawy';
const address = 'Jawa Tengah, Indonesia';

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

function sayGoodBye(name) {
  console.log(`Good bye, ${name}`);
}

class Employee {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  sayHello(name) {
    console.log(`Hello ${name}, My name is Employee ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, address, department) {
    super(name, address);
    this.department = department;
  }

  sayHello(name) {
    console.log(`Hello ${name}, My name is Manager ${this.name}`);
  }

  superSayHello(name) {
    super.sayHello(name);
  }
}

export { name, address, sayHello, sayGoodBye, Employee, Manager };
