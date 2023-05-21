import { Router } from 'express';

import adminRoutes from './admin.js';
import shopRoutes from './shop.js';
import authRoutes from './auth.js';

const router = Router();

router.use('/admin', adminRoutes);
router.use(shopRoutes);
router.use(authRoutes);

export default router;
