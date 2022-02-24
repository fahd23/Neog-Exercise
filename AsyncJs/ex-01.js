// Write a function strLength() which takes

// 1. Your name
// 2. A function which it will call with the length of your name
// Now, call this function with the two parameters.

// Your name. This is simple.
// A function. This function will get the length of the string. Use that length to print a message:
// OMG! my name is X char long!

const lengthOfTheName = (firstName) => firstName.length;

const strLength = (firstName, cb) => {
  const length = cb(firstName);
  console.log(`OMG! ${firstName} is ${length} char long!`);
};

strLength("fahd", lengthOfTheName);
