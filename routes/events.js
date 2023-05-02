import express from 'express'
import Event from '../models/Event.js';
import { createError } from '../utils/error.js';
import {createEvent, deleteEvent, getEvent, getEvents, updateEvent } from '../controllers/event.js';
import { verifyAdmin } from '../utils/verifyToken.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createEvent)


//UPDATE
router.put("/:id", updateEvent)

//DELETE
router.delete("/:id",deleteEvent)

//GET
router.get("/find/:id", getEvent)

//GET ALL
router.get("/", getEvents)


// router.get("/countByType", countByType)
// router.get("/countByCategory", countByCategory)

export default router