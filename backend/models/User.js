const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true }
});

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  address: addressSchema,
  isAdmin: {
    type: Boolean,
    default: false
  },
  cart: {
    items: [cartItemSchema],
    total: {
      type: Number,
      default: 0
    }
  },
  paymentMethods: [{
    type: {
      type: String,
      enum: ['credit_card', 'paypal'],
      required: true
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  }]
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Cart methods
userSchema.methods.addToCart = async function(productId, quantity = 1) {
  const cartItem = this.cart.items.find(
    item => item.product.toString() === productId.toString()
  );

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    this.cart.items.push({ product: productId, quantity });
  }

  await this.save();
  return this.cart;
};

userSchema.methods.removeFromCart = async function(productId) {
  this.cart.items = this.cart.items.filter(
    item => item.product.toString() !== productId.toString()
  );
  await this.save();
  return this.cart;
};

userSchema.methods.updateCartItemQuantity = async function(productId, quantity) {
  const cartItem = this.cart.items.find(
    item => item.product.toString() === productId.toString()
  );

  if (cartItem) {
    if (quantity <= 0) {
      return this.removeFromCart(productId);
    }
    cartItem.quantity = quantity;
    await this.save();
  }
  return this.cart;
};

userSchema.methods.clearCart = async function() {
  this.cart.items = [];
  this.cart.total = 0;
  await this.save();
  return this.cart;
};

const User = mongoose.model('User', userSchema);

module.exports = User; 