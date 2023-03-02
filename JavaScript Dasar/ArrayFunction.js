//Push
let a = [10, 20, 30, 40, 50];
console.log(a.push(60)); // 6
console.log(a); //[10, 20, 30, 40, 50 , 60]

//Pop
let b = [10, 20, 30, 40, 50];
console.log(b.pop()); // 50
console.log(b); //[10, 20, 30, 40]

//Shift
let c = [10, 20, 30, 40, 50];
console.log(c.shift()); // 10
console.log(c); //[20, 30, 40, 50]

//Unshift
let d = [10, 20, 30, 40, 50];
console.log(d.unshift(1)); // 6
console.log(d); //[0, 10, 20, 30, 40, 50]

//Foreach
let e = [10, 20, 30, 40, 50];
let total = 0;
e.forEach((e) => (total += e));
console.log(total); //150

//Filter
let f = [10, 20, 30, 40, 50];
console.log(f.filter((e) => e >= 30)); //[ 30, 40, 50 ]

//Map
let g = [10, 20, 30, 40, 50];
console.log(f.map((e) => e / 10)); //[ 1, 2, 3, 4, 5 ]

//Concat
let h = [10, 20, 30, 40, 50];
let i = [60, 70, 80, 90, 100];
console.log(h.concat(i)); //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
