const Owner = require("../models/Owner");

const createOwner = async (req, res) => {
  //#swagger.summary = Use to register new owner
    if (!req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.address){
        res.status(400).send({message: 'Please make sure to fill-up all required data!'});
        return;
    }

    try{
    const owner = await Owner.create({
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
  //#swagger.summary = Use to request all owners
   /* #swagger.security = [{
               "bearerAuth": []
        }] */
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
  //#swagger.summary = Use to request specific owner by DB ID
    const id = req.params._id;
    Owner.findById({ _id: id })
      .then((data) => {
        if(!data){
          res.status(404).send({message: `Invalid ID given`})
        }
        else{
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'An error occurred while retrieving the owner.'
        });
      });
  };

const updateOwner = (req, res) => {
  //#swagger.summary = Use to update specific owner info by DB ID
    const id = req.params._id;
      const {firstName, lastName, phone, email, address, city, zip} = req.body;
      const updatedOwner = Owner.findByIdAndUpdate({_id: id},{firstName, lastName, phone, email, address, city, zip})
      .then(data => {
        if(!data){
          res.status(404).send({message: `Invalid ID given`})
        }else{
          res.send({'message': `Owner #${id} was successfully updated!`})
      }}).catch(err =>{
        res.status(500).send({message: err.message || 'An error occurred while deleting the owner.'})
})};
  
const deleteOwner = (req, res) => {
  //#swagger.summary = Use to delete specific owner by DB ID
    const id = req.params._id;
      const result = Owner.findByIdAndDelete({_id:id})
      .then(data => {
        if(!data){
          res.status(404).send({message: `Invalid ID given`})
        }else{
          res.send({'message': `Owner #${id} was successfully deleted!`})
      }}).catch(err =>{
        res.status(500).send({message: err.message || 'An error occurred while deleting the owner.'})
      })}

module.exports = {getOwners, getOwner, createOwner, updateOwner, deleteOwner};



