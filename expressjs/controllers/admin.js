import { Product } from "../model/product.js";
export const editProducts = (req, res, next) => {
  res.render("admin/edit-product");
};

export const adminProducts = async ( req, res, next) => {
  const products = await Product.fetchAll();

  //sending pug file instead of HTMl
  res.render("admin/products", { products, doctitle: "shop" });
  res.render("admin/products");
};
