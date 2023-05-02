import express from 'express'
import { createError } from '../utils/error.js';
import { createBlog, deleteBlog, getBlogs, getBlogz, updateBlog } from '../controllers/blog.js';
import { verifyAdmin } from '../utils/verifyToken.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createBlog)


//UPDATE
router.put("/:id", updateBlog)

//DELETE
router.delete("/:id", deleteBlog)

//GET
router.get("/find/:id", getBlogz)

//GET ALL
router.get("/", getBlogs)


// router.get("/countByType", countByType)
// router.get("/countByCategory", countByCategory)

export default router