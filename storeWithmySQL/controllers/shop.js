import { Product } from "../model/product.js";
import Cart from "../model/cart.js";

export const getCart = async (req, res, next) => {
  const { products, totalPrice } = await Cart.getCart();

  const prods = await Product.fetchAll();

  const cartData = [];

  for (let prod of prods) {
    for (let cartProd of products) {
      if (prod.id == cartProd.id) {
        cartData.push({ ...prod, qty: cartProd.qty });
      }
    }
  }

  res.render("shop/cart", { path: "cart", totalPrice, cartData });
};

export const postCart = async (req, res, next) => {
  const prodId = req.body.prodId;
  const products = await Product.fetchAll();

  const prod = products.find((pro) => pro.id == prodId);

  Cart.addProduct(prodId, prod.price);

  res.redirect("/cart");
};

export const index = async (req, res, next) => {
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));

  //sending pug file instead of HTMl
  res.render("shop/index", { path: "shop" });
};

export const products = async (req, res, next) => {
  const products = await Product.findAll();

  res.render("shop/product-list", { path: "cart", products, path: "products" });
};

export const productDetails = async (req, res, next) => {
  //extracting the book id
  const prodId = req.params.productId;

  const prodDetails = await Product.findMyProduct(prodId);

  res.render("shop/product-details", { prodDetails, path: "details" });
};
