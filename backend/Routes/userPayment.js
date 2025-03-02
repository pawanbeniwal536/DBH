const express = require('express');
const router = express.Router();
const { createPayment,getPaymentByCourse } = require('../Controller/userPayment') 
router.post('/purchase', createPayment); // Route for making a payment
router.get('/purchase/info/:user_Id/:course_Id', getPaymentByCourse);

module.exports = router;
