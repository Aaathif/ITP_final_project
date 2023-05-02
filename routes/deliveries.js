import express from "express";
import { createDelivery, deleteDelivery, getDeliveries, updateDelivery,  getDelivery} from "../controllers/delivery.js";

const router = express.Router()

router.post("/", createDelivery)

router.get("/", getDeliveries)

router.get("/find/:id", getDelivery)

router.delete("/:id", deleteDelivery)

router.put("/:id", updateDelivery)

export default router