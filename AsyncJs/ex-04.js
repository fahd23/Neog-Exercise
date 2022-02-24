function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}
// print data on success

fakeFetch("Fahd").then((data) => console.log(data));

// print data on success, print error on failure
fakeFetch("Fahd", true)
  .then((data) => console.log(data))
  .catch(console.error);

// Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.
// Note: Instead of returning the response from the server this should return the length.
// Hint: It will return in a promise.

const getServerResponseLength = (msg, shouldReject) => {
  fakeFetch(msg, shouldReject).then((data) => console.log(data.length));
  // .catch(console.error);
};
getServerResponseLength("fahd");

// Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.
const syncCallsToServer = (msg1, msg2) => {
  fakeFetch(msg1)
    .then((data) => console.log(data))
    .then(fakeFetch(msg2).then((data) => console.log(data)));
};
syncCallsToServer("From server one", "From server two");

// use async-await with fakeFetch
// Given the syntax above. Call fakeFetch() with some msg and use await to get the data and then print it.

// const printDataFromServer = async () => {
//   try {
//     const serverData = await anyPromiseWhichWillReturnData();
//     console.log(serverData);
//   } catch (err) {
//     console.error(err);
//   }
// };

const printDataFromServer = async () => {
  try {
    const serverData = await fakeFetch("fahd");
    console.log(serverData);
  } catch (error) {
    console.log(error);
  }
};
printDataFromServer();

// const syncCallsToServer = (msg1, msg2) => {
//   fakeFetch(msg1)
//     .then((data) => console.log(data))
//     .then(fakeFetch(msg2).then((data) => console.log(data)));
// };
// syncCallsToServer("From server one", "From server two");

const asyncCallsToServer = async (msg1, msg2) => {
  try {
    const serverData1 = await fakeFetch(msg1);
    const serverData2 = await fakeFetch(msg2);
    console.log(serverData1);
    console.log(serverData2);
  } catch (err) {
    console.error(err);
  }
};
asyncCallsToServer("I am 1", "I am 2");
