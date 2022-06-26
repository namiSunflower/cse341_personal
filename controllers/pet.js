const Pet = require("../models/Pet");

const createPet = async (req, res) => {
  //#swagger.summary = Use to register a new pet
    if (!req.body.ownerKey || !req.body.name || !req.body.age || !req.body.petType || !req.body.gender || !req.body.feedingPattern || !req.body.boardingDuration){
        res.status(400).send({message: 'Please make sure to fill-up required data!'});
        return;
    }

    try{
        const pet = await Pet.create({
            "ownerKey": req.body.ownerKey,
            "name": req.body.name,
            "age": req.body.age,
            "petType": req.body.petType,
            "gender": req.body.gender,
            "feedingPattern": req.body.feedingPattern,
            "medicationPattern": req.body.medicationPattern,
            "boardingDuration": req.body.boardingDuration
        });
    
        res.status(201).json({'message': `New pet was successfully created!`})
    }catch(err){
            res.status(500).json({'message': err.message})
    }
};

const getPets = (req, res) => {
  //#swagger.summary = Use to request all pets
    Pet.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the all the pets.'
        });
      });
  };
  
const getPet = (req, res) => {
  //#swagger.summary = Use to request specific pet by DB ID
    const id = req.params._id;
    Pet.findById({ _id: id })
      .then((data) => {
        if(!data){
          res.status(404).send({message: `Invalid ID given`})
        }else{
        res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the pet.'
        });
      });
  };

const updatePet = (req, res) => {
  //#swagger.summary = Use to update specific pet info by DB ID
  const id = req.params._id;
    const {ownerKey,name, age, petType, gender, feedingPattern, medicationPattern, boardingDuration} = req.body;
    const updatedPet = Pet.findByIdAndUpdate({_id: id},{ownerKey, name, age, petType, gender, feedingPattern, medicationPattern, boardingDuration})
    .then(data => {
      if(!data){
        res.status(404).send({message: `Invalid ID given`})
      }else{
        res.send({'message': `Pet #${id} was successfully updated!`})
    }}).catch(err =>{
      res.status(500).send({message: err.message || 'An error occurred while deleting the pet'})
    })};

const deletePet = (req, res) => {
  //#swagger.summary = Use to delete specific pet by DB ID
  const id = req.params._id;
    const result = Pet.findByIdAndDelete({_id:id})
    .then(data => {
      if(!data){
        res.status(404).send({message: `Invalid ID given`})
      }else{
        res.send({'message': `Pet was successfully deleted!`})
    }}).catch(err =>{
      res.status(500).send({message: err.message || 'An error occurred while deleting the pet'})
    })}

module.exports = {getPets, getPet, createPet, updatePet, deletePet};



