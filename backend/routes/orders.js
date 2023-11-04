/* eslint-disable no-console */
const { Router } = require('express');

const Order = require('../models/Order');

const router = Router();

const calculateTotalProductPrice = (order) => {
  order.courses.reduce((total, product) => total + product.count * product.price, 0);
};

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find({
      'user.userId': req.user._id,
    }).populate('user.userId');

    res.json({
      orders: orders.map((order) => ({
        ...order._doc,
        price: () => calculateTotalProductPrice(order),
      })),
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/order', async (req, res) => {
  try {
    const user = await req.user.populate('cart.items.courseId').execPopulate();
    const courses = user.cart.items.map((item) => ({
      count: item.count, ...item.courseId._doc,
    }));

    const order = new Order({
      user: {
        name: req.user.fullName,
        userId: req.user,
      },
      courses,
    });

    await order.save();
    await req.user.clearCart();
    res.json();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
