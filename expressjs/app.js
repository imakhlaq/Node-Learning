import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  console.log("hello");
  next();
});

app.use("/products", (req, res, next) => {
  res.send("<h1>Express</h1>");
});

app.listen(3001);
