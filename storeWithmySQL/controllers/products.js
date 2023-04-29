import { Product } from "../model/product.js";

export const getProduct = (req, res) => {
  //res.sendFile(path.join(__dirname, "views", "add-product.html"));

  res.render("admin/add-product", {
    title: "Add Product",
    path: "addProducts",
  });
};

export const addProduct = async (req, res, next) => {
  const details = { ...req.body };
  try {
    await req.user.createProduct({
      title: details.title,
      price: details.price,
      imageUrl: details.imageUrl,
      description: details.description,
    });

    // const data = await Product.create({
    //   title: details.title,
    //   price: details.price,
    //   imageUrl: details.imageUrl,
    //   description: details.description,
    //   userID: req.user.id,
    // });
  } catch (err) {
    console.log(err, "--------------------");
  }

  res.redirect("/");
};
