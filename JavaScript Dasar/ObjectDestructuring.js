{
  let student = {
    name: 'Muhammad Aufa Asmawy',
    age: 21,
    address: {
      country: 'Indonesia',
      province: 'Jawa Tengah',
    },
    otherAtribut1: null,
    otherAtribut2: null
  }

  const {name, age, address:{country, province}, ...others} = student;
  console.log(name); //Muhammad Aufa Asmawy
  console.log(age); //21
  console.log(country); //Indonesia
  console.log(province); //Jawa Tengah
  console.log(others); //{ otherAtribut1: null, otherAtribut2: null }
}

console.log();

{
  let student = {
    name: 'Muhammad Aufa Asmawy',
    age: 21,
    address: {
      country: 'Indonesia',
      province: 'Jawa Tengah',
    },
    otherAtribut1: null,
    otherAtribut2: null
  }
  const {name: nama, age: umur, address:{country: negara, province: provinsi}, hobby: hobi = 'Tidak Ada', ...others} = student;
  console.log(nama); //Muhammad Aufa Asmawy
  console.log(umur); //21
  console.log(negara); //Indonesia
  console.log(provinsi); //Jawa Tengah
  console.log(hobi); //Tidak Ada
  console.log(others); //{ otherAtribut1: null, otherAtribut2: null }
}

