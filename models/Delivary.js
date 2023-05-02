import mongoose from "mongoose";

const {Schema} = mongoose

const deliverySchema = new mongoose.Schema({
    address: {
        type: String,
        // required: true,
    },
    phoneNo: {
        type: String,
        // required: true, 
    },
    city: {
        type: String,
    },
  
})

export default mongoose.model("Delivery", deliverySchema)