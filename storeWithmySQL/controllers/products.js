import { Product } from "../model/product.js";

export const getProduct = (req, res) => {
  //res.sendFile(path.join(__dirname, "views", "add-product.html"));

  res.render("admin/add-product", {
    title: "Add Product",
    path: "addProducts",
  });
};

export const addProduct = (req, res, next) => {
  const details = { ...req.body };

  Product.create({
    title: details.title,
    price: details.price,
    imageUrl: details.imageUrl,
    description: details.description,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.redirect("/");
};
