//For loop
for (let i = 1; i <= 10; i++) {
  console.log(`Perulangan ke-${i}`);
}

//For in
let student = {
  name: 'Muhammad Aufa Asmawy',
  age: 21,
  address: 'Jawa Tengah, Indonesia',
};

for (const prop in student) {
  console.log(`${prop}: ${student[prop]}`);
}

let students = ['eko', 'joko', 'budi', 'edi'];
for (const index in students) {
  console.log(`${index}: ${students[index]}`);
}

//For of

let persons = ['eko', 'joko', 'budi', 'edi'];
for (const person of persons) {
  console.log(`${person}`);
}

let text = 'JavaScript';
for (const char of text) {
  console.log(`${char}`);
}

//While loop
let i = 1;
while (i <= 10) {
  console.log(`Perulangan ke-${i}`);
  i++;
}

// Do While loop
let counter = 100;
do {
  console.log(`Perulangan ke-${counter}`);
  counter++;
} while (counter <= 10);

//Break
let a = 1;
while (true) {
  if (a > 10) {
    break;
  } else {
    console.log(`Perulangan ke-${a}`);
    a++;
  }
}

//Continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(`Perulangan ganjil ke-${i}`);
}

//Label
loopi: for (let i = 1; i <= 5; i++) {
  loopj: for (let j = 1; j <= 100; j++) {
    if (j > 10) {
      continue loopi;
    }
    console.log(`${i} - ${j}`);
  }
}
