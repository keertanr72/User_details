const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

router.get('/get-user', adminController.getUserInfo)

router.post('/post-user', adminController.postUserInfo)

module.exports = router