import express from "express";
import path from "path";
import { getProduct } from "../controllers/products.js";
import { addProduct } from "../controllers/products.js";
import {
  editProducts,
  adminProducts,
  updateProducts,
  deleteProduct,
} from "../controllers/admin.js";

//making ES6 path
const __dirname = path.resolve();

//creating a routes in diff application and exporting it
const router = express.Router();

router.get("/add-product", getProduct);

router.post("/add-product", addProduct);

router.get("/edit-products/:prodId", editProducts);
router.post("/edit-products/:prodId", updateProducts);
router.get("/products", adminProducts);
router.post("/delete-product/:prodId", deleteProduct);

export default router;
