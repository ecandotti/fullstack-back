const express = require('express');
const router = express.Router();
const usersRouter = require('./users.route');
const stripeRouter = require('./stripe.route');

router.use('/users/',usersRouter);
router.use('/stripe',stripeRouter);

module.exports = router;