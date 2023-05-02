import Feedback from "../models/Feedback.js"
//Create Contact
export const createFeedback = async (req, res, next) => {
    const newFeedback = new Feedback(req.body)

    try {
        const savedFeedback = await newFeedback.save()
        res.status(200).json(savedFeedback)
    } catch (err) {
       next(err)
    }
}

export const getFeedback = async (req, res, next) => {
    try {
        const feedback = await Feedback.find()
        res.status(200).json(feedback)
    } catch (error) {
        next(error)
    }
}

export const deleteFeedback = async (req, res, next) => {
    try {
        await Feedback.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Feedback has been deleted")
    } catch (error) {
        next(error)
    }
}
