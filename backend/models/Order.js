const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userData: {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  products: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);