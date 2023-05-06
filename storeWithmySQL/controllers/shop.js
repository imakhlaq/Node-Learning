import db from "../utils/database.js";

export const getCart = async (req, res, next) => {
  const fetchedCart = await req.user.getCart();

  const cartData = fetchedCart.getProducts();

  res.render("shop/cart", { path: "cart", totalPrice, cartData });
};

export const postCart = async (req, res, next) => {
  const prodId = req.body.prodId;

  const fetchedCart = await req.user.getCart();
  const cart = await fetchedCart.getProducts({ where: { id: prodId } });

  let product;
  if (cart.length > 0) {
    product = cart[0];
  }

  let newQuantity = 1;
  if (product) {
    const oldQuantity = product.cartItem.quantity;
    newQuantity = oldQuantity + 1;

    await fetchedCart.addProduct(product, {
      through: { quantity: newQuantity },
    });
  }

  const prod = await Product.findByPk(prodId);

  fetchedCart.addProduct(prod, { through: { quantity: newQuantity } });

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
