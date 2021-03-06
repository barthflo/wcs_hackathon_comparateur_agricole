const router = require('express').Router();

const farmerRouter = require('./farmer.routes.js')
const cityRouter = require('./city.routes.js')
const buyerRouter = require('./buyer.routes.js')
const productRouter = require('./product.routes.js')
const transactionRouter = require('./transaction.routes.js')
const farmerCityRouter =require ('./farmercity.routes')
const buyerscityRouter =require ('./buyerscity.routes')
const dataRouter = require('./data.routes')
const moyRouter = require('./pricemoy.routes')

router.use('/farmers', farmerRouter);
router.use('/buyers', buyerRouter);
router.use('/cities', cityRouter);
router.use('/products', productRouter);
router.use('/transactions', transactionRouter);
router.use('/farmercity', farmerCityRouter);
router.use('/buyerscity', buyerscityRouter);
router.use('/data', dataRouter);
router.use('/moy', moyRouter);

module.exports = router;