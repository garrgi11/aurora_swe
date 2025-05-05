const User = require('../models/User');
const Product = require('../models/Product');
const { NotFoundError, BadRequestError } = require('../utils/errors');

// Get user's cart
exports.getCart = async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate('cart.items.product', 'name price images stock');

  if (!user) {
    throw new NotFoundError('User not found');
  }

  // Calculate total
  const total = user.cart.items.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
  }, 0);

  user.cart.total = total;
  await user.save();

  res.json(user.cart);
};

// Add item to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;

  if (!productId) {
    throw new BadRequestError('Product ID is required');
  }

  if (quantity < 1) {
    throw new BadRequestError('Quantity must be at least 1');
  }

  // Verify product exists and has enough stock
  const product = await Product.findById(productId);
  if (!product) {
    throw new NotFoundError('Product not found');
  }

  if (product.stock < quantity) {
    throw new BadRequestError('Not enough stock available');
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  await user.addToCart(productId, quantity);
  await user.populate('cart.items.product', 'name price images stock');

  // Calculate total
  const total = user.cart.items.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
  }, 0);

  user.cart.total = total;
  await user.save();

  res.status(201).json(user.cart);
};

// Update cart item quantity
exports.updateCartItem = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 0) {
    throw new BadRequestError('Valid quantity is required');
  }

  // Verify product exists and has enough stock
  const product = await Product.findById(productId);
  if (!product) {
    throw new NotFoundError('Product not found');
  }

  if (quantity > 0 && product.stock < quantity) {
    throw new BadRequestError('Not enough stock available');
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  await user.updateCartItemQuantity(productId, quantity);
  await user.populate('cart.items.product', 'name price images stock');

  // Calculate total
  const total = user.cart.items.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
  }, 0);

  user.cart.total = total;
  await user.save();

  res.json(user.cart);
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;

  const user = await User.findById(req.user._id);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  await user.removeFromCart(productId);
  await user.populate('cart.items.product', 'name price images stock');

  // Calculate total
  const total = user.cart.items.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
  }, 0);

  user.cart.total = total;
  await user.save();

  res.json(user.cart);
};

// Clear cart
exports.clearCart = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  await user.clearCart();
  res.json(user.cart);
}; 