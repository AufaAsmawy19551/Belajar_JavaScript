//If else
let score = 80;

if (score > +90) {
  console.log('Nilai Anda A');
} else if (score >= 80) {
  console.log('Nilai Anda B');
} else if (score >= 70) {
  console.log('Nilai Anda C');
} else if (score >= 60) {
  console.log('Nilai Anda D');
} else if (score >= 50) {
  console.log('Nilai Anda E');
} else {
  console.log('Nilai Anda F');
}

//Switch
let nilai = 'B';
switch (nilai) {
  case 'A':
    console.log('Sangat Baik');
    break;
  case 'B':
    console.log('Baik');
    break;
  case 'C':
    console.log('Cukup');
    break; 
  case 'D':
    console.log('Kurang');
    break;
  case 'E':
    console.log("Sangat Kurang");
    break;
  default:
    console.log("Ulang Tahun Depan!");
}

//Ternary operator
let harga = 30000;
console.log(harga <= 50000 ? 'Murah' : 'Mahal');
