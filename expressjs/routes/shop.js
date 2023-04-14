import express from "express";
import path from "path";
import { Product } from "../model/product.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res, next) => {
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));

  const products = Product.fetchAll();
  console.log(products);

  //sending pug file instead of HTMl
  res.render("shop", { products, doctitle: "shop" });
});

export default router;
