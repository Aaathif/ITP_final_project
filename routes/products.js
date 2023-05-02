import express from 'express'
import Product from '../models/Product.js';
import { createError } from '../utils/error.js';
import { countByCategory, countByType, createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.js';
import { verifyAdmin } from '../utils/verifyToken.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createProduct)


//UPDATE
router.put("/:id",  updateProduct)

//DELETE
router.delete("/:id", verifyAdmin, deleteProduct)

//GET
router.get("/find/:id", getProduct)

//GET ALL
router.get("/", getProducts)


router.get("/countByType", countByType)
router.get("/countByCategory", countByCategory)

export default router