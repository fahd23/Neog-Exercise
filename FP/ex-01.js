// Q1
const brother = { country: "India", myAge: 22 };
const sister = { ...brother, myAge: brother.myAge - 4 };
console.log(brother);
console.log(sister);
// Q2
const color = ["red", "blue", "violet", "pink", "black"];
const add2MoreColors = [...color, "grey", "white"];
console.log(add2MoreColors);
console.log(color);
// Q3
const obj = { name: "fahd", age: 22 };
const birthday = ({ obj }) => ({ ...obj, age: obj.age + 1 });

// Q4
const numberLessThan10 = (number) => number < 10;
const numberArray = [10, 2, 5, 85, 2, 4];

numberArray.filter(numberLessThan10);
//[2, 5, 2, 4]
numberArray.map((num) => num + 2);
//[12, 4, 7, 87, 4, 6]

// Q5
const arrayToBeReduce = [1, 3, 5, 2, 11, 22, 9];
const sumOfOddNum = (acc, curr) => (curr % 2 !== 0 ? acc + curr : acc);
console.log(arrayToBeReduce.reduce(sumOfOddNum));
// 29

// Q6
const reduceObj = (oddEvenObj, num) =>
  num % 2 === 0
    ? { ...oddEvenObj, even: oddEvenObj.even + num }
    : { ...oddEvenObj, odd: oddEvenObj.odd + num };
objOddEven = {
  even: 0,
  odd: 0,
};
// {even: 0, odd: 0}
console.log(reduceObj(objOddEven, 3));
// {even: 2, odd: 0}
console.log(arrayToBeReduce.reduce(reduceObj, objOddEven));
// currying
const giveYourName = (name) => (msg) => `${name} says, ${msg}`;
console.log(giveYourName("Fahd")("Hello"));

const increment = (num) => num + 1;
const sqaure = (num) => num * num;

const incrementThenSqaure = (num) => sqaure(increment(num));
console.log(incrementThenSqaure(5));
// 36
