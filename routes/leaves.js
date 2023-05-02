import express from 'express'
import {createLeave,getLeave,getLeaves,updateLeave,deleteLeave} from '../controllers/leave.js'

const router = express.Router();

router.post('/', createLeave)

 router.get('/', getLeaves)

router.get('/:id', getLeave)

router.delete("/:id", deleteLeave)

router.put("/:id", updateLeave)

export default router