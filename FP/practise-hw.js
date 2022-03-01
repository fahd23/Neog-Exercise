// Q1 - Given the array of integers
const number = [1, 5, 32, 47, 8, 9, 6, 10, 100];
const oddNum = [1, 3, 5, 7, 9];
const evenNum = [2, 4, 6, 8, 10, 12];

// Q.a
const sumOfOddNum = (acc, num) => (num % 2 !== 0 ? acc + num : acc);

// const sumOfOddNum = number.reduce((acc,num)=> num%2 !== 0 ? acc+num : acc,0);

const sumOfOddNumValue = number.reduce(sumOfOddNum, 0);
console.log(`sum of Odd Numbers in the Array : ${sumOfOddNumValue}`);
// Q.b
const sumOfOddIndicesValue = evenNum.reduce(
  (acc, curr, index) => (index % 2 !== 0 ? acc + curr : acc),
  0
);
console.log(`sum of Odd Indices in the Array : ${sumOfOddIndicesValue}`);

// Q.c
const biggestNumInArray = number.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  0
);
console.log(`Biggest Num in the Array : ${biggestNumInArray}`);

// Q.d
const numDivisibleBy10 = number.reduce(
  (acc, curr) => (curr % 10 === 0 ? [...acc, curr] : [...acc]),
  []
);
console.log(numDivisibleBy10);

// Q.e
const oddEvenOperation = number.reduce(
  (acc, curr) => (curr % 2 === 0 ? [...acc, curr - 1] : [...acc, curr + 1]),
  []
);
console.log(oddEvenOperation);

// Q.f
const sumOfOddEvenNumObj = {
  even: 0,
  odd: 0,
};
const sumOfOddEvenNum = number.reduce(
  (acc, curr) =>
    curr % 2 === 0
      ? { ...acc, even: acc.even + curr }
      : { ...acc, odd: acc.odd + curr },
  sumOfOddEvenNumObj
);
console.log(sumOfOddEvenNum);

// Q2. Given an array of String

const stringArray = ["apple", "orange", "mango", "papaya"];

// Q.a - Find then number of Strings with similar number of Characters.
const output = stringArray.reduce((acc, curr) => {
  // console.log(curr.length);
  // console.log(acc[curr.length]);
  return curr.length in acc
    ? { ...acc, [curr.length]: acc[curr.length] + 1 }
    : { ...acc, [curr.length]: 1 };
}, {});

console.log(output);
// { '5': 2, '6': 2 }
// console.log(stringArray[1]);
// // orange
// console.log(stringArray[1].length);
// // 6
// console.log([].push(stringArray[1].length) + 1);
// //2

// Q.b - Return an array with strings which have vowels
const stringwithVowels = stringArray.reduce(
  (acc, curr) =>
    curr.includes("a" || "e" || "i" || "o" || "u") ? [...acc, curr] : [...acc],
  []
);

console.log(stringwithVowels);

// Q.c - Return an array of obj with key as item and value as number of charackers in the string
const ObjStringChar = stringArray.reduce(
  (acc, curr) => [...acc, { [curr]: curr.length }],
  []
);

console.log(ObjStringChar);

// Currying
const giveYourName = (name) => name;

const message = (name) => (msg) => `${name} says ${msg} `;

const fahdSays = message("Fahd");

console.log(fahdSays("Hello"));
console.log(message("Fahd")("Hello"));

const add = (num1) => (num2) => num1 + num2;
console.log(add(4)(4));

//composition
const userNameMsg = (msg) => `Fahd says, ${msg}`;
const userIdMsg = (msg) => `ID : 1813FD :: ${msg}`;
const userNameAndIdMsg = (msg) => userIdMsg(userNameMsg(msg));

console.log(userNameAndIdMsg("Hello"));
