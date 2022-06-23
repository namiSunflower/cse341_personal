const Pet = require("../models/Pet");

const createPet = async (req, res) => {
    if (!req.body._id || !req.body.name || !req.body.age || !req.body.petType || !req.body.gender || !req.body.feedingPattern || !req.body.boardingDuration){
        res.status(400).send({message: 'Please make sure to fill-up required data!'});
        return;
    }

    try{
        const pet = await Pet.create({
            "_id": req.body._id,
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
    const id = req.params._id;
    Pet.find({ _id: id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the pet.'
        });
      });
  };

module.exports = {createPet, getPets, getPet};



