import express from 'express'
import { createAttendance, getAttendance, getAttendances } from '../controllers/attendence.js'

const router = express.Router();

router.post('/', createAttendance)

router.get('/', getAttendances)

router.get('/:id', getAttendance)

export default router