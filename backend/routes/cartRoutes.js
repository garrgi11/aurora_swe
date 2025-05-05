const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');

// All routes are protected
router.use(protect);

// GET /api/cart
router.get('/', getCart);

// POST /api/cart
router.post('/', addToCart);

// PUT /api/cart/:productId
router.put('/:productId', updateCartItem);

// DELETE /api/cart/:productId
router.delete('/:productId', removeFromCart);

// DELETE /api/cart
router.delete('/', clearCart);

module.exports = router; 