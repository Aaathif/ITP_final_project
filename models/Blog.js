import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    TextH: {
        type: String,
        required: true,
    },
    TextP: {
        type: String,
        required: true, 
    },
    img: {
        type: String,
        required: true,
    },
    Btn: {
        type: String,
        required: true,
    },
    textFull: {
        type: String,
        required: true,
    },
})

export default mongoose.model("Blog", BlogSchema)