const input = '12345';
const number = Number(input);

console.log(typeof input);
console.log(typeof number);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

const data = Number('salah');
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

const value = Number("12345");
console.log(value.toString(2));
console.log(value.toLocaleString("id-ID"));
console.log(value.toLocaleString("en-US"));
