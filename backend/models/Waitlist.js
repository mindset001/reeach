const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ['consumer', 'retailer', 'distributor', 'manufacturer']
  },
  // Common fields
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  
  // Consumer specific fields
  fullName: {
    type: String,
    trim: true
  },
  excitedFeatures: [{
    type: String
  }],
  
  // Business specific fields (retailer, distributor, manufacturer)
  businessName: {
    type: String,
    trim: true
  },
  category: [{
    type: String
  }],
  outlets: {
    type: String
  },
  primaryContact: {
    type: String,
    trim: true
  },
  
  // Metadata
  submittedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  }
});

// Index for faster queries
waitlistSchema.index({ email: 1 });
waitlistSchema.index({ userType: 1 });
waitlistSchema.index({ submittedAt: -1 });

module.exports = mongoose.model('Waitlist', waitlistSchema);
