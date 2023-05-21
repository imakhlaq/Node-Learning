export const signUp = (req, res, next) => {
  console.log('dadad');
  res.render('auth/signup', { path: 'signup' });
};

export const logIn = (req, res, next) => {
  console.log('dadad');
  res.render('auth/login', { path: 'login' });
};
