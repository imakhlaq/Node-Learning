import express from "express";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

//parsing body for every request

app.use(express.urlencoded({ extended: false }));

//staticly serving files
app.use(express.static(__dirname, "public"));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//handling 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-Found.html"));
});

//listing
app.listen(3001, () => {
  console.log("server start on http://localhost:3001/");
});
