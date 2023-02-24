
function volumeKubus(s){
  return s ** 3;
}

let volumeBalok = function(a, b, c){
  return a * b * c;
}

let volumeBola = (r) => {
  return 4 / 3 * 3.14 * r ** 3;
}

console.log(volumeKubus(10));
console.log(volumeBalok(10, 20, 30));
console.log(volumeBola(10));


function countLength(arr, callback){
  newArr = [];
  arr.forEach(e => 
    newArr.push(callback(e))
  )
  return newArr;
}

let arr = ["Muhammad", "Aufa", "Asmawy"];

console.log(countLength(arr, e => e.length));