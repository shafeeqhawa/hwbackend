const express = require('express')
const router = express.Router()
const categoryContrller = require('../controllers/categoryController')

router.get('/', categoryContrller.categorys);
router.post('./newcat', categoryContrller.createcategory)


module.exports= router