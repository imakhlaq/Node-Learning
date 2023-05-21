import db from '../utils/database.js';

export const getCart = async (req, res, next) => {
  const { product } = await db.cart.findUnique({
    where: { user_id: req.user.id },
    include: { product: true },
  });

  res.render('shop/cart', {
    path: 'cart',
    quantity: 0,
    totalPrice: 0,
    product,
  });
};

export const deleteCartItem = async (req, res, next) => {
  const prodId = req.body.productId;

  try {
    //disconnect to remove the relation
    const deleteItem = await db.cart.update({
      where: {
        user_id: req.user.id,
      },
      data: {
        product: {
          disconnect: [{ id: +prodId }],
        },
      },
      select: {
        product: true,
      },
    });
  } catch (err) {
    console.log(err.message);
  }

  res.redirect('/cart');
};

export const postCart = async (req, res, next) => {
  const prodId = req.body.prodId;

  try {
    // const product = await db.product.findUnique({ where: { id: +prodId } });
    const cartExist = await db.cart.findUnique({ where: { id: req.user.id } });

    if (!cartExist) {
      const data = await db.cart.create({
        data: {
          user_id: req.user.id,
        },
      });
    }

    //connect to add relation
    const data = await db.cart.update({
      where: { user_id: req.user.id },
      data: {
        product: {
          connect: [{ id: +prodId }],
        },
      },
    });
  } catch (err) {
    console.log(err.message);
  }

  res.redirect('/cart');
};

export const index = async (req, res, next) => {
  //sending file
  // res.sendFile(path.join(__dirname, "views", "shop.html"));

  //sending pug file instead of HTMl
  res.render('shop/index', { path: 'shop' });
};

export const products = async (req, res, next) => {
  const products = await db.product.findMany();

  res.render('shop/product-list', { path: 'cart', products, path: 'products' });
};

export const productDetails = async (req, res, next) => {
  //extracting the book id
  const prodId = req.params.productId;

  const prodDetails = await db.product.findUnique({ where: { id: +prodId } });

  res.render('shop/product-details', { prodDetails, path: 'details' });
};

export const orderProducts = async (req, res, next) => {
  try {
    const { product } = await db.cart.findUnique({
      where: { user_id: req.user.id },
      include: { product: true },
    });
    //connect to add relation
    const orders = await db.order.create({
      data: {
        user_id: req.user.id,
        product: {
          connect: product.map((prod) => ({ id: prod.id })),
        },
      },
      include: {
        product: true,
      },
    });

    await db.cart.update({
      where: { id: req.user.id },
      data: {
        product: {
          set: [],
        },
      },
    });
  } catch (err) {
    console.log(err.message);
  }

  res.redirect('/orders');
};

export const getOrderProducts = async (req, res, next) => {
  try {
    const orders = await db.order.findMany({
      where: { user_id: req.user.id },
      orderBy: {
        id: 'desc',
      },
      include: { product: true },
    });

    res.render('./shop/order', { path: 'order', orders });
  } catch (err) {
    console.log(err.message);
  }
};
