import express from "express";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();

//parsing body for every request

app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

//handling 404
app.use((req, res) => {
  res.status(404).send("<h1>not found</h1>");
});

//listing
app.listen(3001, () => {
  console.log("server start on http://localhost:3001/");
});
