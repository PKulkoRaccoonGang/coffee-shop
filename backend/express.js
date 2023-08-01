const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { loginValidation, registerValidation } = require('./utils/validations');
const checkAuth = require('./utils/checkAuth');
const { UserController, ProductController } = require('./controllers/index');

mongoose.connect('mongodb+srv://peterkulko:IOeJH2uyQBU0zDDj@cluster0.dakktrl.mongodb.net/coffee-shop?retryWrites=true&w=majority').then(() => {
  console.log('=========== Mongo DB has been connected ===========');
}).catch((err) => {
  console.log('=========== Mongo DB error ===========', err);
});

const PORT = 4444;
const app = express();

app.use(express.json());
app.use(cors());

app.post('/auth/sign-in', loginValidation, UserController.login);

app.post('/auth/sign-up', registerValidation, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/products', ProductController.getAll);

app.get('/products/:id', ProductController.getOne);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`=========== The server has been started on port ${PORT} ===========`);
});
