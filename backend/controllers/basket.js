/* eslint-disable no-console */
const ProductModel = require('../models/Product');

function mapBasketItems(basket) {
  return basket.items.map((product) => ({
    ...product.courseId._doc, count: product.count,
  }));
}

const getBasketData = async (req, res) => {
  try {
    const user = await req.user.populate('cart.items.courseId').execPopulate();
    const courses = mapBasketItems(user.cart);

    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addProductToBasket = async (req, res) => {
  try {
    const course = await ProductModel.findOne({ _id: req.body._id });
    await req.user.addToCart(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while adding item to cart' });
  }
};

module.exports = { getBasketData, addProductToBasket };
