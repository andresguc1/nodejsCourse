const { exec, spawn } = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");


exec("ls -la", (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return false;
  }

  console.log(stdout)
});


let proceso = spawn('ls', ['-la'])

console.log(proceso.pid)

proceso.stdout.on('data', function (data) {
    console.log(data.toString())
})

proceso.on('exit', function () {
    console.log('Process finish')
    console.log(proceso.kill)
})