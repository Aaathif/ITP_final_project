import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        username: {
            type : String,
            // required: true,
            unique: true,
        },
        email: {
            type : String,
            // required: true,
            unique: true,
        },
        password: {
            type : String,
            // required: true,
        },
        firstName: {
            type : String,
            // required: true,
        },
        lastName: {
            type : String,
            // required: true,
        },
        contactNo: {
            type : String,
            // required: true,
        },
        address: {
            type : String,
            // required: true,
        },
        dateOfBirth: {
            type : Date,
            // required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("customer", CustomerSchema)