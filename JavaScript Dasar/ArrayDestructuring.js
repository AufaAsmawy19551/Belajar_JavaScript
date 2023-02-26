{
let fruits = ['manggo', 'apple', 'banana', 'orange', 'grape'];
const [firstFruit, secondFruit, tirthFruit, ...others] = fruits;

console.log(firstFruit); //manggo
console.log(secondFruit); //apple
console.log(tirthFruit); //banana
console.log(others); //[ 'orange', 'grape' ]
}

console.log();

{
let fruits = ['manggo', 'apple', 'banana'];
const [firstFruit, secondFruit, tirthFruit, fourthFruit = 'Tidak Ada'] = fruits;

console.log(firstFruit); //manggo
console.log(secondFruit); //apple
console.log(tirthFruit); //banana
console.log(fourthFruit); //Tidak Ada
}