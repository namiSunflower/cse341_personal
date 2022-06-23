const Owner = require("../models/Owner");

const createOwner = async (req, res) => {
    if (!req.body._id || !req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.address){
        res.status(400).send({message: 'Please make sure to fill-up all required data!'});
        return;
    }

    try{
    const owner = await Owner.create({
        "_id": req.body._id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "phone": req.body.phone,
        "email": req.body.email,
        "address": req.body.address,
        "city": req.body.city,
        "zip": req.body.zip
    });

    res.status(201).json({'message': `New owner was successfully created!`})
    }catch(err){
        res.status(500).json({'message': err.message})
    }
};

const getOwners = (req, res) => {
    Owner.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving all the owners.'
        });
      });
  };
  
const getOwner = (req, res) => {
    const id = req.params._id;
    Owner.find({ _id: id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the owner.'
        });
      });
  };

module.exports = {createOwner, getOwners, getOwner};



