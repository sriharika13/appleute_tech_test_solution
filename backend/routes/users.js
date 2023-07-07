const userController= require('../controllers/users')

const express= require('express')

const router= express.Router()
router.get('/users', userController.getUsers)

module.exports= router