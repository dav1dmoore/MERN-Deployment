//import controller
const petController = require("../controllers/pet.controller")

// Define Routes
module.exports = app => {

    //create new pet app.route
    app.post("/api/pet/new", petController.createPet)

    //Read (display) all pets app get
    app.get("/api/pets", petController.findAllPets)

    //Read display one pet app.get
    app.get("/api/pet/:id", petController.displayPet)

    //Update an pet app.put
    app.put("/api/pet/update/:id", petController.updatePet)

    //Delete Destroy a pet
    app.delete("/api/pet/delete/:id", petController.deletePet)
}