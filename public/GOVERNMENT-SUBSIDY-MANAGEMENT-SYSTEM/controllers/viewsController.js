const express=require('express');
const User=require('./../models/userModel');
const jwt=require('jsonwebtoken');
const Analyst=require('./../models/analystModel');
const dealers=require('./../models/dealersModel');
const path = require('path');
const Dealers = require('./../models/dealersModel');
const orders= require('./../models/ordersModel');
const post=require('./../models/postModel')
const requests = require('requests');

exports.homePage=async (req,res,next)=>
{
try{
    let idUser;
    
    if(req.cookies.jwt)
    {
        
     idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
     console.log(idUser)
    }
    let user;
    
    const users=await User.find();
    if(idUser)
    {
         user= await User.findById(idUser);
    }
    
    if(user)
    {   const analyst= await Analyst.find();
        const dealer= await Dealers.find();
        console.log(analyst)
        // console.log(dealer)
        res.status(200).render('base',{users, user, analyst ,dealer});
    }
    
    else
    {
    res.status(200).render('login');
    }
}catch(e){console.log("error at base view ");
console.log(e);}
}
exports.login=async (req,res,next)=>
{
   try{ res.status(200).render('login')}catch(e){console.log(e)}
}
exports.signup=async(req,res,next)=>
{
   try{ res.status(200).render('signup')}catch(e){console.log(e)}
}
exports.consultAnalyst= async (req,res,next)=>
{
    try{res.status(200).render('consultAnalyst');}catch(e){console.log(e)}
}
exports.aboutMe= async (req,res,next)=>
{
  try{ const idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
  const user= await User.findById(idUser);
  res.status(200).render('aboutme',{user});}catch(e){console.log(e)}
}
exports.updateUser=async (req,res,next)=>
{  
   try{ const user= await User.findById(req.params.id)
    res.status(200).render('updateMe' ,{user})}catch(e){console.log(e)}
}
exports.consultAnalyst=async (req,res,next)=>
{ 
   try{
    const analyst= await User.findById(req.params.anaId)
    res.status(201).render('consultAnalyst',{analyst})
   }catch(e){console.log(e)}
}
exports.answerQuery=async (req,res,next)=>
{   try{
    const request= await Analyst.findById(req.params.reqId)
    res.status(200).render('answerQuery',{request})
}catch(e){console.log(e)}
}

exports.consultDealer=async(req,res,next)=>
{
    try
    {
        const dealer= await User.findById(req.params.delId)
        res.status(200).render('consultDealer',{dealer})
    }
    catch(e)
    {

    }
}
exports.acceptDeal=async (req,res,next)=>
{   try{
    const deal= await Dealers.findById(req.params.dealId)
    console.log(deal)
    res.status(200).render('acceptDeal',{deal})
}catch(e){console.log(e)}
}
exports.dashboard= async(req,res,next)=>
{
    try{
        const idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
        const nAnalyst= await User.countDocuments({roles:"analyst"})
        const nDealers= await User.countDocuments({roles:"dealer"})
        const nFarmers= await User.countDocuments({roles:"farmer"})
        const user= await User.findById(idUser);
        const analyst= await Analyst.find();
        // console.log(user)
        // console.log(analyst)
        const dealers=await Dealers.find();
        let noOfQueries=0;
        let noOfResponse=0;
        for(i=0;i<analyst.length;i++)
        {
            if(analyst[i].from.phone===user.phone)
            {
                noOfQueries++;
            }
            if(analyst[i].from.phone===user.phone && analyst.Accept==1)
            {
                noOfResponse++;
            }
        }

        res.status(200).render('dashboard1',{user, analyst, dealers, nAnalyst , nDealers, nFarmers,noOfQueries,noOfResponse})
    }catch(e)
    {
        console.log(e)
    }
}
exports.dashboard2= async(req,res,next)=>
{
    try{
        const idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
        const nAnalyst= await User.countDocuments({roles:"analyst"})
        const nDealers= await User.countDocuments({roles:"dealer"})
        const nFarmers= await User.countDocuments({roles:"farmer"})
        const user= await User.findById(idUser);
        const analyst= await Analyst.find();
        // console.log(user)
        // console.log(analyst)
        const dealers=await Dealers.find();
        let noOfQueries=0;
        let noOfResponse=0;
        let amount=0;
        for(i=0;i<dealers.length;i++)
        {
            if(dealers[i].to.phone===user.phone)
            {
                noOfQueries++;
            }
            if(dealers[i].to.phone===user.phone && dealers.Accept==1)
            {
                noOfResponse++;
            }
            if(dealers[i].to.phone===user.phone && dealers.Accept==1)
            {
                amount+=parseInt(dealers[i].expectedPrice)
            }

        }

        res.status(200).render('dashboard2',{user, analyst, dealers, nAnalyst , nDealers, nFarmers,noOfQueries,noOfResponse,nFarmers,amount})
    }catch(e)
    {
        console.log(e)
    }
}
exports.dashboard3= async(req,res,next)=>
{
    try{
        const idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
        const nAnalyst= await User.countDocuments({roles:"analyst"})
        const nDealers= await User.countDocuments({roles:"dealer"})
        const nFarmers= await User.countDocuments({roles:"farmer"})
        const user= await User.findById(idUser);
        const analyst= await Analyst.find();
        // console.log(user)
        // console.log(analyst)
        const dealers=await Dealers.find();
        let noOfQueries=0;
        let noOfResponse=0;
        for(i=0;i<analyst.length;i++)
        {
            if(analyst[i].from.phone===user.phone)
            {
                noOfQueries++;
            }
            if(analyst[i].from.phone===user.phone && analyst.Accept==1)
            {
                noOfResponse++;
            }
        }

        res.status(200).render('dashboard3',{user, analyst, dealers, nAnalyst , nDealers, nFarmers,noOfQueries,noOfResponse})
    }catch(e)
    {
        console.log(e)
    }
}
exports.bargain=async (req,res,next)=>
{
    try{
        const dealId=req.params.dealId
        res.status(200).render('bargain',{dealId})
    }catch(e)
    {
        
        console.log("error at bargain view");
        console.log(e)

    }
}
exports.viewBargain=async (req,res, next)=>
{

    const idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
    const Deals=await  dealers.find()
    res.status(200).render("viewBargain",{Deals, idUser})
}
exports.wether= async(req,res)=>
{
    res.status(200).render('wether')
}
exports.chatBot=async(req,res)=>
{
    res.status(200).render('chatBot')
}
exports.viewPrice=async(req,res)=>{
    res.status(200).render('map');
}
exports.payment=async(req,res)=>
{  const dealId= req.params.dealId
    console.log(dealId)
    const d= await dealers.findById(req.params.dealId)
    res.status(200).render('payMain',{dealId, d});
}
exports.payment2=async(req,res)=>
{  const dealId= req.params.dealId
    console.log(dealId)
    const d= await dealers.findById(req.params.dealId)
    res.status(200).render('payment',{dealId, d});
}
exports.tracker=async(req,res)=>
{   const dealId= req.params.dealId
    res.status(200).render('tracker',{dealId});
}
exports.productPage= async(req,res)=>
{
    const dealer= await Dealers.find();
    res.status(200).render('productPage',{dealer});
}
exports.analyticsPage= async(req,res)=>
{
    const idUser = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
    const dealers= await Dealers.find();
    res.status(200).render('analytics',{dealers,idUser})

}
exports.farmerStats= async(req,res)=>
{

}

exports.userDeatils=async(req,res)=>
{
const user = await User.findById(req.params.userId);
console.log(user)
res.status(200).render('userDetails',{user})
}
exports.farmersGrowth=async(req,res)=>
{
    const users= await User.find();
    res.status(200).render('framerGrowth',{users})
}
exports.orderStatus=async(req,res)=>{
    const order= await orders.find();
    console.log(order)
    res.status(200).render('orderStatus',{order});

}
exports.removeUser= async(req,res,next)=>
{
    res.status(200).render('removeUser');
}

exports.getNews=async(req,res,next)=>
{
    res.status(200).render('news');
}

exports.createWorkshop=async (req,res,next)=>
{
    const id=jwt.verify(req.cookies.jwt, process.env.JWT_SECRET, (err, decoded) => { return decoded.id });
    const user= await User.findById(id);
    const from = user._id
    res.status(200).render('createWorkshop',{from});
}
exports.viewWorkshop= async(req,res,next)=>{
    const posts= await post.find();
    console.log(posts)
    res.status(200).render('viewWorkshop',{posts});
}

exports.actualMarketPrice=async(req,res,next)=>
{
    
areca= {"Kerala": "Rs 36000 / Quintal", "Karnataka": "Rs 56299 / Quintal", "Goa": "Rs 32100 / Quintal", "Nagaland": "Rs 2600 / Quintal", "Meghalaya": "Rs 138000 / Quint"}
coco={"Goa": "Rs 1275 / Quintal", "Kerala": "Rs 3500 / Quintal", "Uttrakhand": "Rs 1600 / Quintal", "Maharashtra": "Rs 16 / Quintal", "Tamil Nadu": "Rs 550 / Quintal"}

const aEntry = Object.entries(areca);
console.log(aEntry);

res.status(200).render('dummy');
}