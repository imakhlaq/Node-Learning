import express from "express";
import path from "path";

//making ES6 path
const __dirname = path.resolve();

//creating a routes in diff application and exporting it
const router = express.Router();

console.log(path.join(__dirname, "views", "add-product.html"));
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  const body = req.body;
  console.log(body);

  res.redirect("/");
});

export default router;
