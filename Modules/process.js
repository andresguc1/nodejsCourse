// const p = require('process');

process.on("beforeExit", () => {
  console.log("the concert of metallica wil be end");
});

process.on("exit", () => {
  console.log("The concert of Metallica End");
});

process.on("uncaughtException", (err, origin) => {
  console.log("You have the opportunity to know Metallica members");
  console.error("You have opportunity to play with Metallica members");
  console.error(err);
});

// functionNotExist(); 
console.log("We have error the function no exist");
