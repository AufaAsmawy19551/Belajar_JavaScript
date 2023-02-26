console.log(parseInt("1.1")); //1
console.log(parseInt("1salah")); //1
console.log(parseInt("salah")); //NaN
console.log(parseInt(1.1)); //1

console.log(parseFloat("1.1")); //1.1
console.log(parseFloat("1.1salah")); //1.1

console.log(Number("1")); //1
console.log(Number("1.1")); //1.1
console.log(Number("1.1salah")); //NaN
console.log(Number("salah")); //NaN

let a = 1;
let b = 2.2;
console.log(a.toString() + b.toString()); //12.2

console.log(isNaN('salah')); //true