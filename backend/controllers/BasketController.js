const OrderModel = require('../models/Order');

const sendBasketProducts = async (req, res) => {
  try {
    const newOrder = new OrderModel({
      fullName: req.body[0].name,
      phone: req.body[0].phone,
      city: req.body[0].city,
      products: req.body[1].products,
    });
    console.log('=========== newOrder ===========', newOrder);
    const order = await newOrder.save();

    res.json({ order });
  } catch (e) {
    res.status(500).json({
      message: 'Failed to ordering',
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    console.log('============= orders =====================', orders);
    res.json(orders);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('❌ Error: Orders list not founded', err);
    res.status(500).json({
      message: 'Orders list not founded',
    });
  }
};

module.exports = { sendBasketProducts, getAllOrders };
