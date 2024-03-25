// const readline = require('readline');

// let arr=[1,2,3,4,5,6,7];
// let k 
//  k.readline("enter the number");
// console.log(arr)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [1, 2, 3, 4, 5, 6, 7];

rl.question('Enter the number: ', (answer) => {
  console.log(arr);
  let  k = parseInt(answer); // Convert the user input to a number
  rl.close();
});
