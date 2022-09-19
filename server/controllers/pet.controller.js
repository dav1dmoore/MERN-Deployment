// Method names to be used

const Pet = require("../models/pet.model");

//1 Create Pet

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then((newPet) => {res.json({results: newPet})})
    .catch(err => res.status(400).json({err: err}))
}

//2 Find all pets

module.exports.findAllPets = (req, res) => {
    Pet.find()
    .then((allPets) => {res.json({results: allPets})})
    .catch(err => res.json({err:err}))
} 

//3 display Pet

module.exports.displayPet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then((pet) => {res.json({results: pet})})
    .catch(err => res.json({err:err}))
}

//4 updated Pet

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {
        new: true,
        runValidators: true
    })
    .then((updatedPet) => {res.json({results: updatedPet})})
    .catch(err => res.status(400).json({err: err}))
}

//5 delete Pet

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
    .then((deletedPet) => {res.json({results: deletedPet})})
    .catch((err) => {res.json({err:err})})
}