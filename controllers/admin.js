const { UserInputError } = require("apollo-server-express");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

//Register Admin
const registerAdmin = async (req, res) => {
    //#swagger.summary = Use to register new owner
      if (!req.body.username|| !req.body.password){
          res.status(400).send({message: 'Please make sure to fill-up all required data!'});
          return;
      }

      //Check if user is already in DB
      const userExist = await Admin.findOne({username: req.body.username})
      if(userExist) return res.status(400).send('Username has already been taken');

      //Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //Create new admin
      try{
      const admin = await Admin.create({
          "username": req.body.username,
          "password": hashedPassword,
      });
      res.status(201).json({'message': `Your account was successfully registered!`})
      }catch(err){
          res.status(500).json({'message': err.message})
      }
  };

  //Login Admin
  const loginAdmin = async(req, res) => {
    //Check if username exists
    const userExist = await Admin.findOne({username: req.body.username})
    if(!userExist) return res.status(400).send('Username is not found');
    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, userExist.password)
    if(!validPass) return res.status(400).send('Invalid password')

    //Create and assign a token
    const token = jwt.sign({_id: userExist._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);
  } 

  module.exports = {registerAdmin, loginAdmin}