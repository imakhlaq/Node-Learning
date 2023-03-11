import express from "express";

//creating a routes in diff application and exporting it
const router = express.Router();

router.get("/add-products", (req, res) => {
  res.send(
    "<form action='/products' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

router.post("/products", (req, res, next) => {
  const body = req.body;
  console.log(body);

  res.redirect("/");
});

export default router;
