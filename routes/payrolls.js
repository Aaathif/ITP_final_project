import express from 'express'
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createPayroll, deletePayroll, getPayroll, getPayrolls, updatePayroll } from '../controllers/payroll.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createPayroll)


//UPDATE
router.put("/:id", updatePayroll)

//DELETE
router.delete("/:id", deletePayroll)

//GET
router.get("/find/:id", getPayroll)


//GET ALL
router.get("/", getPayrolls)


// router.get("/countByType", countByType)
// router.get("/countByCategory", countByCategory)

export default router