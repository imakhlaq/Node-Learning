import express from "express";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import sequelize from "./utils/database.js";
import path from "path";

const app = express();

//tempting engin
app.set("view engine", "ejs");

const __dirname = path.resolve();

//parsing body for every request
app.use(express.urlencoded({ extended: true }));

//statically serving files
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//handling 404
app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pagetitle: "Page Not Found", path: "404" });
});

//this will create the tables when app initializes
sequelize
  .sync()
  .then((res) => {
    console.log(res);
    //listing
    app.listen(3001, () => {
      console.log("server start on http://localhost:3001/");
    });
  })
  .catch((err) => {
    console.log(err);
  });
