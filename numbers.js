//1. provide the sum of the following variables
var num10 = 10;
var string8 = '8';
var one = 1;

console.log('First Part', num10 + parseInt(string8) + one);

console.log('Second Part');
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
[...Array(101 - 20)].forEach((_, i) => (i + 20) % 3 || console.log(i + 20));

//3. find the class average given the following test scores
var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
console.log(
  'Third Part',
  scores.reduce((average, score) => score + average) / scores.length
);
