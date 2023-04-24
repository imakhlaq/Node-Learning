import { Product } from "../model/product.js";

export const cart = (req, res, next) => {
  res.render("shop/cart", { path: "cart" });
};

export const index = async (req, res, next) => {
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));

  //sending pug file instead of HTMl
  res.render("shop/index", { path: "shop" });
};

export const products = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/product-list", { path: "cart", products, path: "products" });
};

export const productDetails = async (req, res, next) => {
  //extracting the book id
  const prodId = req.params.productId;

  const prodDetails = await Product.findMyProduct(prodId);

  res.render("shop/product-details", { prodDetails, path: "details" });
};
