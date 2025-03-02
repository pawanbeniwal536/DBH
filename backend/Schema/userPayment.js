const mongoose = require('mongoose');

const userPayment = new mongoose.Schema({
    user_Id: { type: String, required: true },
    course_Id:{type:Number, required:true},
    Payment: { type: Boolean, required: true,default : true },
    PaymentCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserPayment', userPayment);
