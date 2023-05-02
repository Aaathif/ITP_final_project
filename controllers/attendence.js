import Attendance from "../models/Attendance.js";

export const createAttendance = async (req, res, next) => {
    const newAttendance = new Attendance(req.body)

    try {
        const savedAttendance = await newAttendance.save()
        res.status(200).json(savedAttendance)
    } catch (err) {
        next(err)
    }
}

//GET MenuList with ID
export const getAttendance = async (req, res, next) => { 
    try {
        const Attendance = await Attendance.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(Attendance)
    } catch (err) {
        next(err)
    }
}

//GET All MenuList
export const getAttendances = async (req, res, next) => { 
    try {
        const Attendances = await Attendances.find()
        res.status(200).json(Attendances)
    } catch (err) {
        next(err)
    }
}