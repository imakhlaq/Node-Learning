import { Product } from "../model/product.js";
import { Admin } from "../model/admin.js";

export const editProducts = async (req, res, next) => {
  const prodId = req.params.prodId;

  const product = await Product.findByPk(prodId);

  res.render("admin/edit-product", { path: "edit-products", product });
};

export const updateProducts = async (req, res, next) => {
  const prodId = req.params.prodId;

  const data = req.body;

  try {
    await Product.update(
      {
        title: data.title,
        price: data.price,
        imageUrl: data.imageUrl,
        description: data.description,
      },
      {
        where: { id: prodId },
      }
    );
    console.log("UPDATED");
  } catch (err) {
    console.log(err);
  }

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

  await Product.destroy({
    where: { id: id },
  });

  res.redirect("/admin/products");
};
