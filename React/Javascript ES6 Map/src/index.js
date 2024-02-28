var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);

// Using For Each
var newNumbers = [];

function double(x) {
  newNumbers.push(x * 2);
}
numbers.forEach(double);
console.log(newNumbers);

//simpler map version
const newNumbers = numbers.map(function (x) {
  return x * 2;
});

//Filter - Create a new array by keeping the items that return true.

numbers.filter(function (num) {
  return num > 10;
});

var newNumbers = [];
numbers.forEach(function (num) {
  if (num > 10) {
    newNumbers.push(num);
  }
});

//Reduce - Accumulate a value by doing something to each item in an array.

numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.

numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches.

const newNumber = numbers.findIndex(function (num) {
  return num > 10;
});

//Challenge Code, uses map function to find meaning and cut it down to first 100 characters

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
