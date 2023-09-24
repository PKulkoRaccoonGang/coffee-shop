const OrderModel = require('../models/Order');

const sendBasketProducts = async (req, res) => {
  try {
    console.log('req', req.body);
    // console.log('res', res);

    const newOrder = new OrderModel({
      fullName: req.body[0].name,
      phone: req.body[0].phone,
      city: req.body[0].city,
      products: req.body[1].products,
    });

    const order = await newOrder.save();

    res.json({ order });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Failed to ordering',
    });
  }
};

module.exports = { sendBasketProducts };
