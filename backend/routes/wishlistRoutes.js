const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  checkWishlistItem
} = require('../controllers/wishlistController');

// All routes are protected
router.use(protect);

// GET /api/wishlist
router.get('/', getWishlist);

// POST /api/wishlist
router.post('/', addToWishlist);

// DELETE /api/wishlist/:productId
router.delete('/:productId', removeFromWishlist);

// GET /api/wishlist/check/:productId
router.get('/check/:productId', checkWishlistItem);

module.exports = router; 