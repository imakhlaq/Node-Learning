import express from "express";
import path from "path";

// import adminRoutes from "./routes/admin.js";
// import shopRoutes from "./routes/shop.js";
// import sequelize from "./utils/database.js";

// import { Product } from "./model/product.js";
// import User from "./model/user.js";
// import Cart from "./model/cart.js";
// import CartItem from "./model/cartIteams.js";
import db from "./utils/database.js";

const app = express();

//tempting engin
app.set("view engine", "ejs");

const __dirname = path.resolve();

//parsing body for every request
app.use(express.urlencoded({ extended: true }));

//statically serving files
app.use(express.static(path.join(__dirname, "public")));

app.use(async (req, res, next) => {
  const user = await db.user.findUnique({
    where: { id: 1 },
  });
  console.log(user);
  req.user = user;
  next();
});

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

//handling 404
app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pagetitle: "Page Not Found", path: "404" });
});

//this will create the tables when app initializes
(async function () {
  try {
    const userExists = await db.user.findUnique({
      where: { id: 1 },
    });

    //checking for use
    if (!userExists) {
      await db.user.create({
        data: {
          name: "Akhlaq Ahmad",
          email: "imakhlaqXD@gmail.com",
        },
      });
    }

    //listing
    app.listen(3001, () => {
      console.log("server start on http://localhost:3001/");
    });
  } catch (err) {
    console.log(err.message);
  }
})();
