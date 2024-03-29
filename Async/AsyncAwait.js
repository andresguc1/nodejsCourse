async function hello(name) {
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
      console.log(name, " Rulez!!!");
      resolve(name);
      // reject()
    }, 2000);
  });
}

async function bye(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bye, " + name);
      resolve();
    }, 1500);
  });
}

console.log("Initiate process...");

async function main() {
  let name = await hello("Andres");
  await talk("Metallica");
  await bye();
  console.log('-----End-----')
}
console.log('-----Start-----')
main();

