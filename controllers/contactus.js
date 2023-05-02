import ContactUs from "../models/ContactUs.js";

//Create Contact
export const createContact = async (req, res, next) => {
    const newContact = new ContactUs(req.body)

    try {
        const savedContact = await newContact.save()
        res.status(200).json(savedContact)
    } catch (err) {
       next(err)
    }
}

export const getContact = async (req, res, next) => {
    try {
        const contacts = await ContactUs.find()
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

export const deleteContact = async (req, res, next) => {
    try {
        await ContactUs.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Contact has been deleted")
    } catch (error) {
        next(error)
    }
}
