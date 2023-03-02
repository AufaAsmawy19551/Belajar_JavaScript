const map = new Map();

map.set('name', 'Muhammad Aufa Asmawy');
map.set('address', 'Jawa Tengah, Indonesia');

console.log(map);
console.log(map.get('name'));
console.log(map.get('address'));
console.log(map.get('hobby'));

for (const element of map) {
  console.log(`${element[0]} : ${element[1]}`);
}

map.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});
