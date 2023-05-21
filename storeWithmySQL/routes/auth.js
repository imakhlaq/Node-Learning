import { Router } from 'express';
import { signUp, logIn } from '../controllers/auth.js';

const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);

export default router;
