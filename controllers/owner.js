const Owner = require("../models/Owner");

const createOwner = async (req, res) => {
    if (!req.body._id || !req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.address){
        res.status(400).send({message: 'Please make sure to fill-up required data!'});
        return;
    }

    const owner = new Owner(req.body);

    owner.save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'An error occurred while creating the owner.'
      });
    });
};

const getOwners = (req, res) => {
    User.find({})
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
    User.find({ _id: id })
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



