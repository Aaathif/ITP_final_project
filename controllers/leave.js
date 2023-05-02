import Leave from "../models/Leave.js";

export const createLeave = async (req, res, next) => {
    const newLeave = new Leave(req.body)

    try {
        const savedLeave = await newLeave.save()
        res.status(200).json(savedLeave)
    } catch (err) {
        next(err)
    }
}

export const getLeave = async (req, res, next) => { 
    try {
        const Leave = await Leave.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(Leave)
    } catch (err) {
        next(err)
    }
}

//GET All MenuList
export const getLeaves = async (req, res, next) => { 
    try {
        const Leaves = await Leaves.find()
        res.status(200).json(Leaves)
    } catch (err) {
        next(err)
    }
}

export const updateLeave = async (req,res,next)=>{
    try {
      const updatedLeave = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedLeave);
    } catch (err) {
      next(err);
    }
  }
  export const deleteLeave = async (req,res,next)=>{
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  }