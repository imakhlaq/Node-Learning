//for storing data
export const products = [{ title: "the book of nodes" }];

export const getProduct = (req, res) => {
  //res.sendFile(path.join(__dirname, "views", "add-product.html"));

  res.render("add-product", { title: "Add Product" });
};

export const addProduct = (req, res, next) => {
  products.push({ title: req.body.title });

  res.redirect("/");
};
