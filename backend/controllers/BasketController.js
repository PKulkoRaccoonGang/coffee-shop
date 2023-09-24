const OrderModel = require('../models/Order');

const sendBasketProducts = async (req, res) => {
  try {
    const newOrder = new OrderModel({
      fullName: req.body[0].name,
      phone: req.body[0].phone,
      city: req.body[0].city,
      products: req.body[1].products,
    });

    const order = await newOrder.save();

    res.json({ order });
  } catch (e) {
    res.status(500).json({
      message: 'Failed to ordering',
    });
  }
};

module.exports = { sendBasketProducts };
