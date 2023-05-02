import Event from "../models/Event.js"

//Create Event
export const createEvent = async (req, res, next) => {
    const newEvent = new Event(req.body)

    try {
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent)
    } catch (err) {
        next(err)
    }
}

//Update Event
export const updateEvent = async (req, res, next) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedEvent)
    } catch (err) {
        next(err)
    }
}
//Delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        await Event.findByIdAndDelete(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json("Event has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Produt with ID
export const getEvent = async (req, res, next) => { 
    try {
        const Event = await Event.findById(
            req.params.id, 
            // { $set: req.body},
            // {new:true}
        )
        res.status(200).json(Event)
    } catch (err) {
        next(err)
    }
}

//GET All Events
export const getEvents = async (req, res, next) => { 
    try {
        const Events = await Event.find()
        res.status(200).json(Events)
    } catch (err) {
        next(err)
    }
}

