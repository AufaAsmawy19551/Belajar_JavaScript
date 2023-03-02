function Employee(name, address) {
  this.name = name
  this.address = address
}

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, My name is Employee ${this.name}`)
}

const eko = new Employee('Eko', 'Jakarta')
eko.sayHello('Joko')

const joko = new Employee('Joko', 'Yogyakarta')
joko.sayHello('Eko')

console.log(eko)
console.log(joko)
