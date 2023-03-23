import express from "express";
import path from "path";

//making ES6 path
const __dirname = path.resolve();

//creating a routes in diff application and exporting it
const router = express.Router();

//for storing data
export const products = [{ title: "the book of nodes" }];

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });

  res.redirect("/");
});

export default router;
