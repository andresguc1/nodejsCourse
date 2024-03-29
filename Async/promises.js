function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hello, " + name);
      resolve(name);
    }, 1000);
  });
}

async function talk(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Metallica Rulez!!!");
    //   resolve(name);
    reject()
    }, 2000);
  });
}

function bye(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bye, " + name);
      resolve()
    }, 1500);
  });
}

console.log("Initiate process...");
hello("Metallica")
.then(talk)
.then(talk)
.then(talk)
.then(talk)
.then(bye)
.then((name) => {
  console.log("Process Finish...");
})
.catch(error => {
    console.error('We have a problem')
})
