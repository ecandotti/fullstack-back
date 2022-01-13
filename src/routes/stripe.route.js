const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripe.controller');
const verifyToken = require('../helpers/verifyToken');

router.post('/checkout-session', stripeController.checkoutSession);

module.exports = router;