const ProductModel = require('../models/Product');

function mapBasketItems(cart) {
  return cart.items.map((c) => ({
    ...c.courseId._doc, count: c.count,
  }));
}

function computePrice(courses) {
  // eslint-disable-next-line no-return-assign
  return courses.reduce((total, course) => total += course.price * course.count, 0);
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

const addProductToBasket = async (req) => {
  const course = await ProductModel.findOne({ _id: req.body._id });
  await req.user.addToCart(course);
};

const deleteProductFromBasket = async (req) => {
  await req.user.removeFromCart(req.params.id);
  await req.user.populate('cart.items.courseId').execPopulate();
};

module.exports = { getBasketData, addProductToBasket, deleteProductFromBasket };
