const UserPayment = require('../Schema/userPayment');

// Controller for handling user payments
const createPayment = async (req, res) => {
    try {
        const { user_Id, course_Id } = req.body;

        // Check if the user has already purchased the SAME course
        const existingPayment = await UserPayment.findOne({ user_Id, course_Id });

        if (existingPayment) {
            return res.status(400).json({ message: "You have already purchased this course." });
        }

        // Create a new payment entry (allowing users to purchase different courses)
        const newPayment = new UserPayment({
            user_Id,
            course_Id,
            Payment: true, // Always true
        });

        await newPayment.save();

        res.status(201).json({ message: "Payment successful!", payment: newPayment });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Controller to get a specific course purchase by user_Id and course_Id
const getPaymentByCourse = async (req, res) => {
    try {
        const { user_Id, course_Id } = req.params; // Extract from request params

        // Find the payment record for this user and course
        const payment = await UserPayment.findOne({ user_Id, course_Id });

        if (!payment) {
            return res.status(404).json({ message: "No payment found for this course and user." });
        }

        res.status(200).json({ message: "Payment record found", payment });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { createPayment, getPaymentByCourse };
