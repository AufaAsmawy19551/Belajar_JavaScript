let kendaraan = [];

kendaraan.push({
  tipe: "motor",
  roda: 2,
})

kendaraan.push({
  tipe: "beack motor",
  roda: 3,
})

kendaraan.push({
  tipe: "mobil",
  roda: 4,
})

kendaraan.push({
  tipe: "Bus",
  roda: 6,
})

kendaraan.push({
  tipe: "truk",
  roda: 12,
})

kendaraan.forEach(e => console.log(`${e.tipe} memiliki ${e.roda} roda`));