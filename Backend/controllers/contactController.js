
// const asyncHandler =require("express-async-handler");

// const Contact=require("../models/contactModel");
// const getContacts=asyncHandler(async(req,res)=>{
//     const contacts =await Contact.find();
//     res.status(200).json(contacts);

// });


// const createContact=asyncHandler(async(req,res)=> {
//     console.log("The request body is:",req.body);
//     const{name,email,}=req.body;
//     if(!name||!email||!phone){
//         res.status(400)
//         throw new Error("All fields are mandatory !")
//     }
//     const contact =await Contact.create({
//         name,
//         email,
//         phone,
//     });
//     res.status(201).json({contact});
// });


// const getContact=asyncHandler(async(req,res)=>{
//     const contacts= await Contact.findById(req.params.id);
//         if(!contacts){
//             res.status(404);
//             throw new Error("Contact not found");
//         }

//     res.status(200).json(contacts);
// });

// const updateContact=asyncHandler(async(req,res)=>{
//     const contact= await Contact.findById(req.params.id);
//     if(!contact){
//         res.status(404);
//         throw new Error("Contact not found");
//     }
//     const updateContact = await Contact.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new:true}
//     );
//      res.status(200).json({message:"updateContact"});
    
// });


// const deleteContact=asyncHandler(async(req,res)=>{
//     const contact= await Contact.findById(req.params.id);
//     if(!contact){
//         res.status(404);
//         throw new Error("Contact not found");
//     }
//     await Contact.deleteOne();

//     res.status(200).json(contact);
// });




// module.exports={getContacts,createContact,getContact,deleteContact,updateContact}












const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// Create a new contact
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const { name, email } = req.body;

    if (!name || !email ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const contact = await Contact.create({
        name,
        email,
    });

    res.status(201).json(contact); // Removed extra object wrapping
});

// Get a contact by ID
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);
});

// Update a contact by ID
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact); // Return the updated contact
});

// Delete a contact by ID
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndDelete(req.params.id); // Use findByIdAndDelete

    res.status(200).json({ message: "Contact deleted", contact }); // Return a message and the deleted contact
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};