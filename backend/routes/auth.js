const authController= require('../controllers/auth')

const express= require('express')
const jwt= require('jsonwebtoken')

const router= express.Router()
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports= router
