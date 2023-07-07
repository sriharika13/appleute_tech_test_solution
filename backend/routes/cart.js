const cartController= require('../controllers/cart')

const express= require('express')

const router= express.Router()
router.get('/cart', cartController.getCart)
router.post('/cart', cartController.postCart)

module.exports= router