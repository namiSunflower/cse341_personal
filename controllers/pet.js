const Pet = require("../models/Pet");

const createPet = async (req, res) => {
    if (!req.body._id || !req.body.name || !req.body.age || !req.body.petType || !req.body.gender || !req.body.feedingPattern || !req.body.boardingDuration){
        res.status(400).send({message: 'Please make sure to fill-up required data!'});
        return;
    }

    const pet = new Pet(req.body);

    pet.save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occurred while creating the pet.'
      });
    });
};

const getPets = (req, res) => {
    User.find({})
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
    User.find({ _id: id })
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



