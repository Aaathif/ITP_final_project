import Product from "../models/Product.js"

//Create Product
export const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        next(err)
    }
}

//Update Product
export const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedProduct)
    } catch (err) {
        next(err)
    }
}
//Delete Product
export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json("Product has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Produt with ID
export const getProduct = async (req, res, next) => { 
    try {
        const product = await Product.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
}

//GET All Products
export const getProducts = async (req, res, next) => { 
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        next(err)
    }
}


export const countByType = async (req, res, next) => {
    const types = req.query.types.split(",");
    try {
      const list = await Promise.all(
        types.map((type) => {
          return Product.countDocuments({ type: type });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  
  
  export const countByCategory = async (req, res, next) => {
      try {
        const breadCount = await Product.countDocuments({ category: "bread" });
        const beverageCount = await Product.countDocuments({ category: "beverage" });
        const candyCount = await Product.countDocuments({ category: "candy" });
    
        res.status(200).json([
          { category: "bread", count: breadCount },
          { category: "beverage", count: beverageCount },
          { category: "candy", count: candyCount },
        ]);
      } catch (err) {
        next(err);
      }
    };