const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Pet name is required!"],
        minLength: [3, "Pet name must be atleast 3 characters!"]
    },
    type: {
        type: String, 
        required: [true, "Pet type is required!"],
        minLength: [3, "Pet type must be atleast 3 characters!"]
    },
    description: {
        type: String, 
        required: [true, "Pet description is required!"],
        minLength: [3, "Pet description must be atleast 3 characters!"]
    },
    skillOne: {
        type: String 
        // required: [true, "Pet description is required!"],
        // minLength: [3, "Pet description must be atleast 3 characters!"]
    },
    skillTwo: {
        type: String 
        // required: [true, "Pet description is required!"],
        // minLength: [3, "Pet description must be atleast 3 characters!"]
    },
    skillThree: {
        type: String 
        // required: [true, "Pet description is required!"],
        // minLength: [3, "Pet description must be atleast 3 characters!"]
    }

}, {timestamps: true});

//Register our new collection (Scheme)

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;