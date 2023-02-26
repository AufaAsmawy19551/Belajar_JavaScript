const recursive = number => {
  if(number === 1 || number === 0){
    return 1;
  }else{
    return number * recursive(number - 1);
  }
}

console.log(recursive(5));