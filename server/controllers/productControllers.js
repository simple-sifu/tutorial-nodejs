// @desc  Get all products that meet search criteria
// @route GET /api/v1/products
// @access Public
const products = require("../data/productData");
const createSearchCache = require("../utils/CreateSearchCache");

// function createSearchCache() {
//   console.log("Creating SearchCache");
//   const hashMap = {};
//   const productMap = products.map((product) => {
//     const searchWordsArr = product.name.split(" ").concat(product.tags);
//     searchWordsArr.forEach((searchWord) => {
//       let growingChar = "";
//       searchWord.split("").forEach((char) => {
//         growingChar = growingChar.concat(char.toLowerCase());
//         if (!hashMap[growingChar]) {
//           hashMap[growingChar] = [product._id];
//         } else if (!hashMap[growingChar].includes(product._id)) {
//           hashMap[growingChar] = hashMap[growingChar].concat(product._id);
//         }
//       });
//     });
//   });
//   console.log("hashMap =", hashMap);
//   return (searchTerm) => {
//     const arrOfIds = hashMap[searchTerm];
//     return arrOfIds.map((id) => {
//       productMap[id];
//     });
//   };
// }

const search = createSearchCache(products);

exports.getProducts = (req, res, next) => {
  res.status(200).json({ success: true, data: products });
};

// @desc  Get single product
// @route GET /api/v1/products/:id
// @access Public
exports.getProduct = (req, res, next) => {
  console.log("calling getProduct1");
  console.log('search("shampoo") =', search("shampoo"));
  console.log("calling getProduct2");
  res
    .status(200)
    .json({ success: true, data: searchApi1.search("describing") });
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
