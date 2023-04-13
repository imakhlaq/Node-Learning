import express from "express";
import path from "path";

import { products } from "../controllers/products.js";

const router = express.Router();

const __dirname = path.resolve();

router.get("/", (req, res, next) => {
  // console.log(products);
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));
  console.log(products);

  //sending pug file instead of HTMl
  res.render("shop", { products, doctitle: "shop" });
});

export default router;
