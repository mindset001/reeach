const express = require('express');
const router = express.Router();
const Waitlist = require('../models/Waitlist');
const auth = require('../middleware/auth');

// @route   GET /api/admin/waitlist
// @desc    Get all waitlist entries
// @access  Private
router.get('/waitlist', auth, async (req, res) => {
  try {
    const { userType, page = 1, limit = 50, search } = req.query;

    // Build query
    let query = {};
    
    if (userType && userType !== 'all') {
      query.userType = userType;
    }

    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { fullName: { $regex: search, $options: 'i' } },
        { businessName: { $regex: search, $options: 'i' } }
      ];
    }

    // Execute query with pagination
    const waitlistEntries = await Waitlist.find(query)
      .sort({ submittedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // Get total count
    const count = await Waitlist.countDocuments(query);

    // Get statistics
    const stats = await Waitlist.aggregate([
      {
        $group: {
          _id: '$userType',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      success: true,
      data: waitlistEntries,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      },
      stats: stats.reduce((acc, curr) => {
        acc[curr._id] = curr.count;
        return acc;
      }, {})
    });
  } catch (error) {
    console.error('Get waitlist error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   GET /api/admin/waitlist/:id
// @desc    Get single waitlist entry
// @access  Private
router.get('/waitlist/:id', auth, async (req, res) => {
  try {
    const entry = await Waitlist.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Waitlist entry not found' 
      });
    }

    res.json({
      success: true,
      data: entry
    });
  } catch (error) {
    console.error('Get waitlist entry error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   DELETE /api/admin/waitlist/:id
// @desc    Delete waitlist entry
// @access  Private
router.delete('/waitlist/:id', auth, async (req, res) => {
  try {
    const entry = await Waitlist.findByIdAndDelete(req.params.id);

    if (!entry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Waitlist entry not found' 
      });
    }

    res.json({
      success: true,
      message: 'Waitlist entry deleted successfully'
    });
  } catch (error) {
    console.error('Delete waitlist entry error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   GET /api/admin/stats
// @desc    Get dashboard statistics
// @access  Private
router.get('/stats', auth, async (req, res) => {
  try {
    const totalEntries = await Waitlist.countDocuments();
    
    const entriesByType = await Waitlist.aggregate([
      {
        $group: {
          _id: '$userType',
          count: { $sum: 1 }
        }
      }
    ]);

    const recentEntries = await Waitlist.find()
      .sort({ submittedAt: -1 })
      .limit(10)
      .select('email userType submittedAt fullName businessName');

    // Get entries by date (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const entriesByDate = await Waitlist.aggregate([
      {
        $match: {
          submittedAt: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$submittedAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.json({
      success: true,
      stats: {
        total: totalEntries,
        byType: entriesByType.reduce((acc, curr) => {
          acc[curr._id] = curr.count;
          return acc;
        }, {}),
        recent: recentEntries,
        byDate: entriesByDate
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// @route   POST /api/admin/export
// @desc    Export waitlist to CSV
// @access  Private
router.post('/export', auth, async (req, res) => {
  try {
    const { userType } = req.body;
    
    let query = {};
    if (userType && userType !== 'all') {
      query.userType = userType;
    }

    const entries = await Waitlist.find(query).sort({ submittedAt: -1 });

    // Convert to CSV format
    const headers = ['User Type', 'Email', 'Name/Business', 'Phone', 'Location', 'Submitted At'];
    const csvRows = [headers.join(',')];

    entries.forEach(entry => {
      const name = entry.fullName || entry.businessName || '';
      const row = [
        entry.userType,
        entry.email,
        `"${name}"`,
        entry.phone || '',
        entry.location || '',
        entry.submittedAt.toISOString()
      ];
      csvRows.push(row.join(','));
    });

    const csv = csvRows.join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=waitlist-${Date.now()}.csv`);
    res.send(csv);
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

module.exports = router;
