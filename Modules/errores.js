function otherBrokeFunction(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.log("Look here" + err);
    }
  });
}

function itsBroken() {
  return 3 + z;
}

try {
  itsBroken();
} catch (err) {
  console.error("uuuppss. Something was wrong");
  console.error(err.message);
  console.log("we have a error");
}

console.log("This is the end");

otherBrokeFunction;
