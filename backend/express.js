const express = require('express');
const mongoose = require('mongoose');
const { loginValidation, registerValidation } = require('./utils/validations');
const checkAuth = require('./utils/checkAuth');
const { UserController, ProductController } = require('./controllers/index');

mongoose.connect('mongodb+srv://peterkulko:IOeJH2uyQBU0zDDj@cluster0.dakktrl.mongodb.net/coffee-shop?retryWrites=true&w=majority').then(() => {
  console.log('DB OK');
}).catch((err) => {
  console.log('DB ERROR', err);
});

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);

app.post('/auth/register', registerValidation, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/products', ProductController.getAll);

app.get('/products/:id', ProductController.getOne);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
