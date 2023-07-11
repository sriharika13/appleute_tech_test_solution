const cartController = require('../controllers/cart')
const { authenticateJWT } = require('../middlewares/authenticate')

const express = require('express')

const router = express.Router()
router.get('/cart', authenticateJWT, cartController.getCart)
router.post('/cart', authenticateJWT, cartController.postCart)

module.exports = router
