import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>My Shopping app</h1>");
});

export default router;
