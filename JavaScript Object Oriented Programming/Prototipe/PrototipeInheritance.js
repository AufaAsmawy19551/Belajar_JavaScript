function Employee(name, address) {
  this.name = name
  this.address = address
}

function Manager(name, address, department) {
  this.name = name
  this.address = address
  this.department = department
}

// Manager.prototype = Employee.prototype //Salah
Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, My name is Manager ${this.name}`)
}

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, My name is Employee ${this.name}`)
}

const eko = new Employee('Eko', 'Jakarta')
eko.sayHello('Joko')

const joko = new Manager('Joko', 'Yogyakarta', 'Marketing')
joko.sayHello('Eko')

console.log(eko)
console.log(joko)
