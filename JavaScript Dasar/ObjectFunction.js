let student = {
  name: 'Muhammad Aufa Asmawy',
  age: 21,
  address: {
    country: 'Indonesia',
    province: 'Jawa Tengah',
  },
  introduction: function () {
    return `
      name: ${this.name} 
      age: ${this.name}
      country: ${this.address.country}
      city: ${this.address.city}
    `;
  },

  get fullAddress() {
    return `${this.address.province}, ${this.address.country}`;
  },

  set fullAddress(value) {
    const arr = value.split(', ');
    this.address.province = arr[0];
    this.address.country = arr[1];
  },
};

student.sayHello = function () {
  return `Hello, My name is ${this.name}`;
};

console.log(student.introduction());
console.log(student.sayHello());

student.fullAddress = 'Yogyakarta, Indonesia';
console.log(student.fullAddress);
