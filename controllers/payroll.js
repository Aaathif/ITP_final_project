import Payroll from "../models/Payroll.js"

//Create Payroll
export const createPayroll = async (req, res, next) => {
    const newPayroll = new Payroll(req.body)

    try {
        const savedPayroll = await newPayroll.save()
        res.status(200).json(savedPayroll)
    } catch (err) {
        next(err)
    }
}

//Update Payroll
export const updatePayroll = async (req, res, next) => {
    try {
        const updatedPayroll = await Payroll.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedPayroll)
    } catch (err) {
        next(err)
    }
}

//Delete Payroll
export const deletePayroll = async (req, res, next) => {
    try {
        await Payroll.findByIdAndDelete(
            req.params.id, 
        )
        res.status(200).json("Payroll has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Payroll with ID
export const getPayroll = async (req, res, next) => { 
    try {
        const Pay = await Payroll.findById(
            req.params.id, 
        )
        res.status(200).json(Pay)
    } catch (err) {
        next(err)
    }
}

//GET All Payrolls
export const getPayrolls = async (req, res, next) => { 
    try {
        const payrolls = await Payroll.find()
        res.status(200).json(payrolls)
    } catch (err) {
        next(err)
    }
}


// export const countByType = async (req, res, next) => {
//     const types = req.query.types.split(",");
//     try {
//       const list = await Promise.all(
//         types.map((type) => {
//           return Product.countDocuments({ type: type });
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