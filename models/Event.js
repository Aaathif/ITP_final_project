import mongoose from "mongoose";

const {Schema} = mongoose

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    offer: {
        type: Number,
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
    prices: {
        type: Number,
        required: true,
        // required: true,
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },

    
})

export default mongoose.model("Event", EventSchema)