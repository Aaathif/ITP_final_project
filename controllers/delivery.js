import Delivery from "../models/Delivary.js"

//Create Delivery
export const createDelivery = async (req, res, next) => {
    const newDelivery = new Delivery(req.body)

    try {
        const savedDelivery = await newDelivery.save()
        res.status(200).json(savedDelivery)
    } catch (err) {
        next(err)
    }
}

//Update Delivery
export const updateDelivery = async (req, res, next) => {
    try {
        const updatedDelivery = await Delivery.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedDelivery)
    } catch (err) {
        next(err)
    }
}
//Delete Delivery
export const deleteDelivery = async (req, res, next) => {
    try {
        await Delivery.findByIdAndDelete(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json("Delivery has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Delivery with ID
export const getDelivery = async (req, res, next) => { 
    try {
        const Del = await Delivery.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(Del)
    } catch (err) {
        next(err)
    }
}

//GET All Deliverys
export const getDeliveries = async (req, res, next) => { 
    try {
        const Deliverys = await Delivery.find()
        res.status(200).json(Deliverys)
    } catch (err) {
        next(err)
    }
}

