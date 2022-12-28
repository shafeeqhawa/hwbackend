const express = require('express')

const router = express.Router()
const userController= require('../controllers/userController')

router.get('/', userController.homeuser);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/me', userController.userinfo);
module.exports = router