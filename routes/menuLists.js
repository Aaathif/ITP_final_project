import express from 'express'
import MenuList from '../models/MenuList.js';
import { createError } from '../utils/error.js';
import { createMenuList, deleteMenuList, getMenuList, getMenuLists, updateMenuList } from '../controllers/menuList.js';
import { verifyAdmin } from '../utils/verifyToken.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createMenuList)


//UPDATE
router.put("/:id", updateMenuList)

//DELETE
router.delete("/:id", deleteMenuList)

//GET
router.get("/find/:id", getMenuList)

//GET ALL
router.get("/", getMenuLists)


// router.get("/countByType", countByType)
// router.get("/countByCategory", countByCategory)

export default router