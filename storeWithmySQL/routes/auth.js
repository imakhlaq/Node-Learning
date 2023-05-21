import { Router } from 'express';
import { signUp, logIn, getLogIn, getSignUp } from '../controllers/auth.js';

const router = Router();

router.post('/signup', signUp);
router.get('/signup', getSignUp);
router.get('/login', getLogIn);
router.post('/login', logIn);

export default router;
