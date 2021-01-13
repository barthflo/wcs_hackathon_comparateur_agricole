const router = require('express').Router();

const farmerRouter = require('./farmer.routes.js')
const cityRouter = require('./city.routes.js')
const buyerRouter = require('./buyer.routes.js')
const productRouter = require('./product.routes.js')
const transactionRouter = require('./transaction.routes.js')

router.use('/farmers', farmerRouter);
router.use('/buyers', buyerRouter);
router.use('/cities', cityRouter);
router.use('/products', productRouter);
router.use('/transactions', transactionRouter);

module.exports = router;