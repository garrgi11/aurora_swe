const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Index for faster queries
wishlistSchema.index({ user: 1 });

// Prevent duplicate products in wishlist
wishlistSchema.methods.addProduct = async function(productId) {
  if (!this.products.some(item => item.product.toString() === productId.toString())) {
    this.products.push({ product: productId });
    return this.save();
  }
  throw new Error('Product already in wishlist');
};

// Remove product from wishlist
wishlistSchema.methods.removeProduct = async function(productId) {
  this.products = this.products.filter(
    item => item.product.toString() !== productId.toString()
  );
  return this.save();
};

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist; 