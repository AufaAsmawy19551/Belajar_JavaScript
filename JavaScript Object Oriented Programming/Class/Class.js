class Employee {
  constructor(name, address) {
    this.name = name
    this.address = address
  }

  sayHello(name) {
    console.log(`Hello ${name}, My name is Employee ${this.name}`)
  }
}

const eko = new Employee('Eko', 'Jakarta')
eko.sayHello('Joko')

console.log(eko);