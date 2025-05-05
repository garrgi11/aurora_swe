const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');
const { NotFoundError, BadRequestError } = require('../utils/errors');

// Get user's wishlist
exports.getWishlist = async (req, res) => {
  let wishlist = await Wishlist.findOne({ user: req.user._id })
    .populate('products.product', 'name price images');

  if (!wishlist) {
    wishlist = await Wishlist.create({ user: req.user._id, products: [] });
  }

  res.json(wishlist);
};

// Add product to wishlist
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    throw new BadRequestError('Product ID is required');
  }

  // Verify product exists
  const product = await Product.findById(productId);
  if (!product) {
    throw new NotFoundError('Product not found');
  }

  let wishlist = await Wishlist.findOne({ user: req.user._id });
  
  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user._id });
  }

  await wishlist.addProduct(productId);
  await wishlist.populate('products.product', 'name price images');

  res.status(201).json(wishlist);
};

// Remove product from wishlist
exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;

  const wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) {
    throw new NotFoundError('Wishlist not found');
  }

  await wishlist.removeProduct(productId);
  await wishlist.populate('products.product', 'name price images');

  res.json(wishlist);
};

// Check if product is in wishlist
exports.checkWishlistItem = async (req, res) => {
  const { productId } = req.params;

  const wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) {
    return res.json({ isInWishlist: false });
  }

  const isInWishlist = wishlist.products.some(
    item => item.product.toString() === productId
  );

  res.json({ isInWishlist });
}; 