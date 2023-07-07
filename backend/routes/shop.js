const productController= require('../controllers/products')

const express= require('express')

const router= express.Router()
router.get('/shop', productController.getProducts)
router.post('/shop', productController.postProduct)

module.exports= router