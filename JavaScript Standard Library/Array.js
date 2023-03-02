//array loop
{
  const array = ['banana', 'orange', 'grape', 'apple', 'manggo'];

  array.forEach((value, index) => {
    console.log(`${index} : ${value}`);
  });
}

// array queue
{
  const queue = [];

  queue.push('Eko');
  queue.push('Joko');
  queue.push('Budi');
  queue.push('Edi');

  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
}

//array stack
{
  const stack = [];

  stack.push('Eko');
  stack.push('Joko');
  stack.push('Budi');
  stack.push('Edi');

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

//array search
{
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3));
  console.log(source.findIndex((value) => value > 3));
  console.log(source.includes(3));
  console.log(source.indexOf(3));
  console.log(source.lastIndexOf(3));
}

//array filter
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(numbers.filter((value) => value % 2 === 0));
  console.log(numbers.filter((value) => value % 2 !== 0));
  console.log(numbers.filter((value) => value > 5));
}

//array transform
{
  const names = 'Muhammad Aufa Asmawy'.split(' ');
  console.log(names.map((value) => value.toUpperCase()));
  console.log(names.reduce((before, value) => before + " " + value)); 
  console.log(names.reduceRight((before, value) => before + " " + value)); 


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers.reduce((result, value) => result + value));
  console.log(numbers.reduceRight((result, value) => result + value));
}
