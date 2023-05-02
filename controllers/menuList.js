import MenuList from "../models/MenuList.js"

//Create MenuList
export const createMenuList = async (req, res, next) => {
    const newMenuList = new MenuList(req.body)

    try {
        const savedMenuList = await newMenuList.save()
        res.status(200).json(savedMenuList)
    } catch (err) {
        next(err)
    }
}

//Update MenuList
export const updateMenuList = async (req, res, next) => {
    try {
        const updatedMenuList = await MenuList.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedMenuList)
    } catch (err) {
        next(err)
    }
}
//Delete MenuList
export const deleteMenuList = async (req, res, next) => {
    try {
        await MenuList.findByIdAndDelete(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json("MenuList has been delete")
    } catch (err) {
        next(err)
    }
}

//GET MenuList with ID
export const getMenuList = async (req, res, next) => { 
    try {
        const MenuList = await MenuList.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(MenuList)
    } catch (err) {
        next(err)
    }
}

//GET All MenuList
export const getMenuLists = async (req, res, next) => { 
    try {
        const MenuLists = await MenuList.find()
        res.status(200).json(MenuLists)
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