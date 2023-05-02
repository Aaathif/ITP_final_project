import Payment from "../models/Payment.js"

//Create Payment
export const createPayment = async (req, res, next) => {
    const newPayment = new Payment(req.body)

    try {
        const savedPayment = await newPayment.save()
        res.status(200).json(savedPayment)
    } catch (err) {
        next(err)
    }
}

//Update Payment
export const updatePayment = async (req, res, next) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedPayment)
    } catch (err) {
        next(err)
    }
}
//Delete Payment
export const deletePayment = async (req, res, next) => {
    try {
        await Payment.findByIdAndDelete(
            req.params.id, 
        )
        res.status(200).json("Payment has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Payment with ID
export const getPayment = async (req, res, next) => { 
    try {
        const Pay = await Payment.findById(
            req.params.id, 
        )
        res.status(200).json(Pay)
    } catch (err) {
        next(err)
    }
}

//GET All Payments
export const getPayments = async (req, res, next) => { 
    try {
        const payments = await Payment.find()
        res.status(200).json(payments)
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