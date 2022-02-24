// write a function that takes a message and a delay and print that message after the delay.

const printMsgAfterDelay = (msg, delay) => {
  setTimeout(msg, delay);
};
printMsgAfterDelay(() => console.log(`Hello Fahd, I am from setTimeout`), 3000);
