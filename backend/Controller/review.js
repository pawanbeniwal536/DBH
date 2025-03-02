const Review = require('../Schema/reviewSchema');

// Get reviews for a specific course
exports.getReviews = async (req, res) => {
    const { courseId } = req.params;
    try {
        const reviews = await Review.find({ courseId }).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};

// Add a new review
exports.addReview = async (req, res) => {
    const { stars, comment, username, courseId } = req.body;
    if (!stars || !comment || !courseId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const newReview = new Review({ stars, comment, username, courseId });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save the review' });
    }
};
