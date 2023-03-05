import express from "express";

const app = express();

//parsing body for every request

app.use(express.urlencoded());

app.use("/", (req, res, next) => {
  console.log("hello");
  next();
});

app.use("/products", (req, res, next) => {
  res.send("<h1>Express</h1>");
});

app.listen(3001);
