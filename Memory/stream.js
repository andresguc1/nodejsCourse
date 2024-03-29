const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

// readableStream.setEncoding("utf-8");
// readableStream.on("data", function (chuck) {
//   data += chuck;
// });

// readableStream.on("end", function () {
//   console.log(data);
// });

// process.stdout.write('Hello')
// process.stdout.write('to the')
// process.stdout.write('Metallica')
// process.stdout.write('Concert')

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

var Mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
