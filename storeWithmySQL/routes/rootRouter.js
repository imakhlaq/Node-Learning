import express from "express";

import adminRoutes from "./admin.js";
import shopRoutes from "./shop.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use(shopRoutes);

export default router;
