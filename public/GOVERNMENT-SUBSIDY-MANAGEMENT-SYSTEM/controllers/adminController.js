const express=require('express');
const User= require('./../models/userModel');
const jwt = require('jsonwebtoken');
const { findOne, findByIdAndDelete } = require('./../models/userModel');


exports.removeUser= async(req,res,next)=>
{
try{    const mail = req.body.mail;
    const user = await User.findOne({email:mail});
  const   id= user._id;
await User.findByIdAndDelete(id);
console.log(`user with id ${id} has been deleted`);}
catch(e)
{
    console.log("error while deleting the user");
    console.log(e);
}
}
