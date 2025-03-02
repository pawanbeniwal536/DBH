const express = require('express');
const router = express.Router();
const { getReviews, addReview } = require('../Controller/review');

// Routes
router.get('/:courseId', getReviews);
router.post('/', addReview);

module.exports = router;
