// @desc  Get all products that meet search criteria
// @route GET /api/v1/products
// @access Public
exports.getProducts = (req, res, next) => {
  res.status(200).json({ success: true, data: { name: "Brad" } });
};

// @desc  Get single product
// @route GET /api/v1/products/:id
// @access Public
exports.getProduct = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show product ${req.params.id}` });
};

// @desc  Create new product
// @route POST /api/v1/products
// @access Private
exports.createProduct = (req, res, next) => {
  res.status(200).json({ success: true, message: `Create product id XYZ` });
};

// @desc  Update product
// @route PUP /api/v1/products/:id
// @access Private
exports.updateProduct = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update product ${req.params.id}` });
};

// @desc  Delete product
// @route DELETE /api/v1/products/:id
// @access Private
exports.deleteProduct = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete product ${req.params.id}` });
};
