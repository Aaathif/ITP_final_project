import mongoose from "mongoose";
const LeaveSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    position: {
        type: String,
        // required: true
    },
    employeeID: {
        type: String,
        // required: true
    },
    stratingDate: {
        type: Date,
        // required: true
    },
    endingDate: {
        type: Date,
        // required: true
    },
    leave: {
        type: String,
        // required: true
    },
    reason: {
        type: String,
        // required: true
    },
},
    {
        timestamps: true,
    }
)

export default mongoose.model("Leave", LeaveSchema)