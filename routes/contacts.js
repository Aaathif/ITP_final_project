import express from "express";
import { createContact, deleteContact, getContact } from "../controllers/contactus.js";

const router = express.Router()

router.post("/", createContact)

router.get("/", getContact)

router.delete("/:id", deleteContact)

export default router