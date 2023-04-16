import express from "express";
import path from "path";
import { Product } from "../model/product.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", async (req, res, next) => {
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));

  const products = await Product.fetchAll();

  //sending pug file instead of HTMl
  res.render("shop/product-list", { products, doctitle: "shop" });
});

export default router;
