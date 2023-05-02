import Blog from "../models/Blog.js"

//Create Blog
export const createBlog = async (req, res, next) => {
    const newBlog = new Blog(req.body)

    try {
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    } catch (err) {
        next(err)
    }
}

//Update Blog
export const updateBlog = async (req, res, next) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedBlog)
    } catch (err) {
        next(err)
    }
}
//Delete Blog
export const deleteBlog = async (req, res, next) => {
    try {
        await Blog.findByIdAndDelete(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json("Blog has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Blog with ID
export const getBlogz = async (req, res, next) => { 
    try {
        const product = await Blog.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
}

//GET All Blog
export const getBlogs = async (req, res, next) => { 
    try {
        const Blogs = await Blog.find()
        res.status(200).json(Blogs)
    } catch (err) {
        next(err)
    }
}


// export const countByType = async (req, res, next) => {
//     const types = req.query.types.split(",");
//     try {
//       const list = await Promise.all(
//         types.map((type) => {
//           return MenuList.countDocuments({ type: type });
//         })
//       );
//       res.status(200).json(list);
//     } catch (err) {
//       next(err);
//     }
//   };
  
  
//   export const countByCategory = async (req, res, next) => {
//       try {
//         const breadCount = await Product.countDocuments({ category: "bread" });
//         const beverageCount = await Product.countDocuments({ category: "beverage" });
//         const candyCount = await Product.countDocuments({ category: "candy" });
    
//         res.status(200).json([
//           { category: "bread", count: breadCount },
//           { category: "beverage", count: beverageCount },
//           { category: "candy", count: candyCount },
//         ]);
//       } catch (err) {
//         next(err);
//       }
//     };