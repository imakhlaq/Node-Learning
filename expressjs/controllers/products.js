import { Product } from "../model/product.js";

export const getProduct = (req, res) => {
  //res.sendFile(path.join(__dirname, "views", "add-product.html"));

  res.render("add-product", { title: "Add Product" });
};

export const addProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
