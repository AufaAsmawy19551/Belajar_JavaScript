let student = {
  name: 'Muhammad Aufa Asmawy',
  age: 21,
  address: {
    country: 'Indonesia',
    province: 'Jawa Tengah',
  },
}

console.log(`
name: ${student.name}
age: ${student.age}
country: ${student?.address?.country}
province: ${student?.address?.province}
city: ${student?.address?.city}
`)

with (student) {
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`country: ${address.country}`);
  console.log(`province: ${address.province}`);
}

if ('name' in student) {
  console.log(`Hello ${student.name}`)
}
