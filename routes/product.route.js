const express = require('express');
const Product = require('../models/product.model.js')
const router = express.Router();
const {getProducts,getProduct,updateProduct,deleteProduct,createProduct} =require('../controllers/product.controller.js')

router.get('/',getProducts)
router.get('/:id',getProduct)


router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.post('/',createProduct)

module.exports=router;