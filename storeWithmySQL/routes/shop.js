import express from "express";
import path from "path";

import {
  getCart,
  postCart,
  index,
  products,
  productDetails,
  deleteCartItem,
} from "../controllers/shop.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", index);
router.get("/cart", getCart);
router.post("/cart-delete-item", deleteCartItem);
router.post("/cart", postCart);
router.get("/products", products);
router.get("/products/:productId", productDetails);
router.get("/checkout");

export default router;
