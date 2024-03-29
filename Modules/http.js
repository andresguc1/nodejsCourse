const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("New request!");
  console.log(req.url);

  switch (req.url) {
    case "/hello":
      res.write("hello, Metallica");
      res.end();
      break;

    default:
      res.write("Error 404: What do you want?");
      res.end();
  }

  // res.writeHead(201, { "content-Type": "text/plain" });

  //wtrite a request to the user
  res.write("Welcome Metallica to Medellin");

  res.end();
}

console.log("listen http on the port: 3000");
