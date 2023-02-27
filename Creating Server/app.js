import http from "http";
import fs from "fs";

//creating server
const server = http.createServer((req, res) => {
  //process.exit();
  const { url, method } = req;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>EnterMessage</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body> `
    );
    res.write("</html>");
    // because we have to stop from sending another req
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("data.txt", "message");
  }
});

//listening for req
server.listen(3001);
