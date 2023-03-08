import express from "express";
import fs from "fs";

const app = express();

//parsing body for every request

app.use(express.urlencoded({ extended: false }));

app.get("/add-products", (req, res) => {
  res.send(
    "<form action='/products' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

app.post("/products", (req, res, next) => {
  const body = req.body;
  console.log(body);

  res.redirect("/");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Express</h1>");
});

//listing
app.listen(3001, () => {
  console.log("server start on http://localhost:3001/");
});
