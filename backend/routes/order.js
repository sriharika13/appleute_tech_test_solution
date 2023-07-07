const checkoutController= require('../controllers/order')

const express= require('express')

const router= express.Router()
router.get('/checkout', checkoutController.getOrder)

module.exports= router