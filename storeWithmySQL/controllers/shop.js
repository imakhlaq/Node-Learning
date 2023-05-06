import db from "../utils/database.js";

export const getCart = async (req, res, next) => {
  const cartData = await db.cart.findMany({ where: { user_id: 1 } });

  console.log(cartData);

  res.render("shop/cart", { path: "cart", totalPrice: 0, cartData });
};

export const postCart = async (req, res, next) => {
  const prodId = req.body.prodId;

  try {
    await db.cart.create({
      data: {
        user_id: 1,
        product_id: +prodId,
      },
    });
  } catch (err) {
    console.log(err.message);
  }

  res.redirect("/cart");
};

export const index = async (req, res, next) => {
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));

  //sending pug file instead of HTMl
  res.render("shop/index", { path: "shop" });
};

export const products = async (req, res, next) => {
  const products = await db.product.findMany();

  console.log(products);

  res.render("shop/product-list", { path: "cart", products, path: "products" });
};

export const productDetails = async (req, res, next) => {
  //extracting the book id
  const prodId = req.params.productId;

  const prodDetails = await db.product.findUnique({ where: { id: +prodId } });

  res.render("shop/product-details", { prodDetails, path: "details" });
};
