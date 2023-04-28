import { Product } from "../model/product.js";
import { Admin } from "../model/admin.js";

export const editProducts = async (req, res, next) => {
  const prodId = req.params.prodId;
  const data = await Product.fetchAll();
  const [product] = data.filter((prod) => prod.id == prodId);

  res.render("admin/edit-product", { path: "edit-products", product });
};

export const updateProducts = async (req, res, next) => {
  const prodId = req.params.prodId;

  const data = req.body;

  Admin.editProduct(prodId, data);

  res.redirect("/admin/products");
};

export const adminProducts = async (req, res, next) => {
  const products = await Product.findAll();

  //sending pug file instead of HTMl
  res.render("admin/products", {
    products,
    docTitle: "shop",
    path: "adminProducts",
  });
};

export const deleteProduct = async (req, res, next) => {
  const id = req.params.prodId;

  Admin.deleteProduct(id);

  res.redirect("/admin/products");
};
