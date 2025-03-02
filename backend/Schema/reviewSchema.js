const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    stars: { type: Number, required: true },
    comment: { type: String, required: true },
    username: { type: String, default: "Anonymous" },
    courseId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
