import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    position: {
        type: String,
        // required: true, 
    },
    employeeID: {
        type: String,
        // required: true,
    }
},
    { timestamps: true } 
)

export default mongoose.model("Attendance", AttendanceSchema)