import mongoose from "mongoose";

const {Schema} = mongoose

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true, 
    },
    type: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photos: {
        type: String,
    },
    size: {
        type: [String],
        // required: true,
    },
    prices: {
        type: [{
            size: {type: String, required: true},
            price: {type: Number, required: true}
        }],
        // required: true,
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },

    
})

export default mongoose.model("Product", ProductSchema)