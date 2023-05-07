import db from "../utils/database.js";

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
    const prodsData = await db.product.create({
      data: {
        title: details.title,
        price: details.price,
        imageUrl: details.imageUrl,
        description: details.description,
        user_id: req.user.id,
      },
    });
  } catch (err) {
    console.log(err.message);
  }

  res.redirect("/");
};
