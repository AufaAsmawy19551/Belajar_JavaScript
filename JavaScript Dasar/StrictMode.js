'use strict';

const student = {
  name: 'Muhammad Aufa Asmawy',
  age: 21,
  address: {
    country: 'Indonesia',
    province: 'Jawa Tengah',
  },
}

//Error
// with (student) {
//   console.log(`name: ${name}`);
//   console.log(`age: ${age}`);
//   console.log(`country: ${address.country}`);
//   console.log(`province: ${address.province}`);
// }