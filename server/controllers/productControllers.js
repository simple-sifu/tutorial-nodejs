// @desc  Get all products that meet search criteria
// @route GET /api/v1/products
// @access Public
const products = require('../data/productData');
const createSearchCache = require('../utils/CreateSearchCache');

const search = createSearchCache(products);

exports.getProducts = (req, res) => {
  res.status(200).json({ success: true, data: products });
};

// @desc  Get single product
// @route GET /api/v1/products/:id
// @access Public
exports.getProduct = (req, res) => {
  res.status(200).json({ success: true, data: search(req.params.id) });
};

// @desc  Create new product
// @route POST /api/v1/products
// @access Private
exports.createProduct = (req, res) => {
  res.status(200).json({ success: true, message: 'Create product id XYZ' });
};

// @desc  Update product
// @route PUP /api/v1/products/:id
// @access Private
exports.updateProduct = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update product ${req.params.id}` });
};

// @desc  Delete product
// @route DELETE /api/v1/products/:id
// @access Private
exports.deleteProduct = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete product ${req.params.id}` });
};
