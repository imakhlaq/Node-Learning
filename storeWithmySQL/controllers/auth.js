import db from '../utils/database.js';
import * as bcrypt from 'bcryptjs';

export const signUp = async (req, res, next) => {
  let { name, email, password, confirmPassword } = req.body;

  password = await bcrypt.hash(password, 10);

  const data = await db.user.create({
    data: { name, email, password },
  });

  console.log(data);
  res.redirect('/products');
};

export const logIn = (req, res, next) => {
  res.redirect('/products');
};

export const getLogIn = (req, res, next) => {
  res.render('auth/login', { path: 'login', errorMessage: null });
};

export const getSignUp = (req, res, next) => {
  res.render('auth/signup', { path: 'signup', errorMessage: null });
};
