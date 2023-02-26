// Unary Operator

//Numeric Convertion
let a = 10;
let b = -20;
console.log(-a); //-10
console.log(-b); //20

//Increment
let c = 10;
let d = 10;
console.log(++c); //11
console.log(d++); //10

//Decrement
let e = 10;
let f = 10;
console.log(--e); //9
console.log(f--); //10

//Binary Operator

//Augmented Asigment
let g = 10;
console.log(g); //10
console.log((g += 1)); //11
console.log((g -= 1)); //10
console.log((g *= 2)); //20
console.log((g /= 2)); //10
console.log((g %= 7)); //3
console.log((g **= 2)); //9

//Aritmatika
console.log(3 + 2); //5
console.log(3 - 2); //1
console.log(3 * 2); //6
console.log(3 / 2); //1.5
console.log(3 % 2); //1
console.log(3 ** 2); //9

//Perbandingan
console.log(3 < '3'); //false
console.log(3 > '3'); //false
console.log(3 <= '3'); //true
console.log(3 >= '3'); //true
console.log(3 == '3'); //true
console.log(3 === '3'); //false
console.log(3 != '3'); //false
console.log(3 !== '3'); //true

//Logika
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

//Concatination
let h = 'Aufa';
let i = 'Asmawy';
console.log(h + ' ' + i); //Aufa Asmawy

//Ternary Operator

//Conditional
let j = 10;
let k = 20;
console.log(j > k ? 'h lebih besar dari i' : 'h kurang dari i'); //h kurang dari i