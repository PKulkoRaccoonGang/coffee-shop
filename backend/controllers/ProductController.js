const ProductModel = require('../models/Product');

const getAll = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Products not founded',
    });
  }
};

const getOne = async (req, res) => {
  try {
    const productId = req.params.id;
    const doc = await ProductModel.findOne({ _id: productId });

    if (!doc) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }

    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Products not found',
    });
  }
};

module.exports = { getOne, getAll };
