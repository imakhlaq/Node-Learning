import { Product } from "../model/product.js";

export const editProducts = async (req, res, next) => {
  const prodId = req.params.prodId;
  const data = await Product.fetchAll();
  const [product] = data.filter((prod) => prod.id == prodId);

  res.render("admin/edit-product", { path: "edit-products", product });
};

export const updateProducts = async (req, res, next) => {
  const prodId = req.params.prodId;

  res.render("admin/edit-product");
};

export const adminProducts = async (req, res, next) => {
  const products = await Product.fetchAll();

  //sending pug file instead of HTMl
  res.render("admin/products", {
    products,
    docTitle: "shop",
    path: "adminProducts",
  });
};
 