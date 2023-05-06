const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    image: String,
    price: String,
    specs: Array,
    dtlimage: Array,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = { ProductModel };
