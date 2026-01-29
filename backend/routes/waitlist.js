const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Waitlist = require('../models/Waitlist');

// @route   POST /api/waitlist/submit
// @desc    Submit waitlist form (public endpoint for frontend)
// @access  Public
router.post('/submit', [
  body('email').isEmail().normalizeEmail(),
  body('userType').isIn(['consumer', 'retailer', 'distributor', 'manufacturer'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const waitlistData = {
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    };

    // Check if email already exists for this user type
    const existingEntry = await Waitlist.findOne({ 
      email: req.body.email,
      userType: req.body.userType 
    });

    if (existingEntry) {
      return res.status(400).json({ 
        success: false, 
        message: 'You have already joined the waitlist for this user type' 
      });
    }

    const waitlistEntry = new Waitlist(waitlistData);
    await waitlistEntry.save();

    res.status(201).json({
      success: true,
      message: 'Successfully joined the waitlist!',
      data: {
        id: waitlistEntry._id,
        userType: waitlistEntry.userType,
        email: waitlistEntry.email
      }
    });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

module.exports = router;
