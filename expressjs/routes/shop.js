import express from "express";
import path from "path";

import { cart, index, products } from "../controllers/shop.js";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", index);
router.get("/cart", cart);
router.get("/products", products);
router.get("/checkout");

export default router;
