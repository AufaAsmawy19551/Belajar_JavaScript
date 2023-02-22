let kendaraan = [];

kendaraan.push({
  tipe: "Motor",
  roda: 2,
})

kendaraan.push({
  tipe: "Beack Motor",
  roda: 3,
})

kendaraan.push({
  tipe: "Mobil",
  roda: 4,
})

kendaraan.push({
  tipe: "Bus",
  roda: 6,
})

kendaraan.push({
  tipe: "Truk",
  roda: 12,
})

kendaraan.forEach(e => console.log(`${e.tipe} memiliki ${e.roda} roda`));