import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
    {
        feedbackType: {
            type : String,
            // required: true,
        },
        category: {
            type : String,
            // required: true,
        },
        description: {
            type : String,
            // required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("feedback", FeedbackSchema)