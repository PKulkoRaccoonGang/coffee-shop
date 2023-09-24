const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { loginValidation, registerValidation } = require('./utils/validations');
const checkAuth = require('./utils/checkAuth');
const { UserController, ProductController, BasketController } = require('./controllers/index');
const { MONGO_CLIENT, PORT } = require('./constants');

mongoose.connect(MONGO_CLIENT).then(() => {
  console.log('✅ Mongo DB has been connected');
}).catch((err) => {
  console.log('❌ Mongo DB error', err);
});

const app = express();

app.use(express.json());
app.use(cors());

app.post('/auth/sign-in', loginValidation, UserController.login);

app.post('/auth/sign-up', registerValidation, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/products', ProductController.getAll);

app.post('/basket', BasketController.sendBasketProducts);

app.get('/orders', BasketController.getAllOrders);

app.get('/products/:id', ProductController.getOne);

app.listen(PORT, (err) => {
  if (err) {
    return console.error(`❌ Error: The server failed to start on port ${PORT}. Please check the configuration.`, err);
  }

  return console.log(`✅ The server has been started on port ${PORT}`);
});
