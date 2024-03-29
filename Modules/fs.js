const fs = require("fs");

// Read File
function fileRead(file, callback) {
  fs.readFile(file, (err, data) => {
    callback(data.toString());
  });
}

// Write File


function fileWrite() {
  fs.writeFile(file, content, function (err) {
    if (err) {
      console.error("Can't read the file...", err);
    } else {
      console.log("File writes correctly");
    }
  });
}


// Delete file
function fileDelete(file, callback) {
    fs.unlink(file, callback);
}


// fileRead(__dirname + "/file.txt", console.log);
fileDelete(__dirname + "/file.txt", console.log)
