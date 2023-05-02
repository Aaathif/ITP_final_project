import mongoose from "mongoose";

const {Schema} = mongoose

const MenuListSchema = new mongoose.Schema({
    categoryTitle: {
        type: String,
        required: true,
    },
    offerTag: {
        type: Number,
        required: true, 
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },

    
})

export default mongoose.model("MenuList", MenuListSchema)