import express from "express";

const app = express();

//parsing body for every request

app.use(express.urlencoded());

app.use("/add-products", (req, res) => {
  res.send(
    "<form action='/products' method='POST'><input type='text' name='tittle'><button type='submit'>Submit</button></form>"
  );
});

app.use("/products", (req, res, next) => {
  res.send("<h1>Express</h1>");
});

app.use("/", (req, res, next) => {
  console.log("hello");
});

//listing
app.listen(3001, () => {
  console.log("server start");
});
