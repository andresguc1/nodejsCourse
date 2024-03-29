function hello(name, helloCallback) {
  setTimeout(function () {
    console.log("Hello, " + name);
    helloCallback(name);
  }, 1000);
}

function talk(talkCallback) {
  setTimeout(function () {
    console.log("Metallica Rulez!!!");
    talkCallback();
  }, 2000);
}

function bye(name) {
  setTimeout(function () {
    console.log("Bye, " + name);
  }, 1500);
}

function conversation(name, times, conversationCallback) {
  if (times > 0) {
    talk(function () {
      conversation(name, --times, conversationCallback);
    });
  } else {
    conversationCallback(name);
  }
}

console.log("Initiate process without callback hell...");

hello("Metallica", function () {
  conversation("Metallica", 3, bye);
});

// console.log("Initiate process...");
// hello("Metallica", function (name) {
//   talk(function () {
//     talk(function () {
//       talk(function () {
//         bye(name, function () {
//           console.log("finish the process...");
//         });
//       });
//     });
//   });
// });
