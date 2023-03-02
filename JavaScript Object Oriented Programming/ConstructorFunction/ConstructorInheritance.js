function Employee(name, address) {
  this.name = name
  this.address = address
  this.sayHello = function (name) {
    console.log(`Hello ${name}, My name is Employee ${this.name}`)
  }
}

function Manager(name, address, department) {
  Employee.call(this, name, address)
  this.department = department
  this.sayHello = function (name) {
    console.log(`Hello ${name}, My name is Manager ${this.name}`)
  }
}

const eko = new Employee('Eko', 'Jakarta')
eko.sayHello('Joko')

const joko = new Manager('Joko', 'Yogyakarta', 'Marketing')
joko.sayHello('Eko')

console.log(eko)
console.log(joko)
