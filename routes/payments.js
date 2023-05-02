import express from 'express'
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createPayment, deletePayment, getPayment, getPayments, updatePayment } from '../controllers/payment.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createPayment)


//UPDATE
router.put("/:id", updatePayment)

//DELETE
router.delete("/:id", deletePayment)

//GET
router.get("/find/:id", getPayment)

//GET ALL
router.get("/", getPayments)


// router.get("/countByType", countByType)
// router.get("/countByCategory", countByCategory)

export default router