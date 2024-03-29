import db from "../utils/database.js";

export const editProducts = async (req, res, next) => {
  const prodId = req.params.prodId;

  const product = await db.product.findUnique({ where: { id: +prodId } });

  res.render("admin/edit-product", { path: "edit-products", product });
};

export const updateProducts = async (req, res, next) => {
  const prodId = req.params.prodId;

  const data = req.body;

  try {
    await db.product.update({
      where: {
        id: +prodId,
      },
      data: data,
    });

    console.log("UPDATED");
  } catch (err) {
    console.log(err);
  }

  res.redirect("/admin/products");
};

export const adminProducts = async (req, res, next) => {
  const products = await db.product.findMany({
    where: { user_id: req.user.id },
  });
  //sending pug file instead of HTMl
  res.render("admin/products", {
    products,
    docTitle: "shop",
    path: "adminProducts",
  });
};

export const deleteProduct = async (req, res, next) => {
  const id = req.params.prodId;

  await db.product.delete({
    where: {
      id: +id,
    },
  });

  res.redirect("/admin/products");
};
