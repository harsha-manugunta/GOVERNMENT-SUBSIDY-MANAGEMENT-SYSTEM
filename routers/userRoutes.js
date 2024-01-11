const express= require('express');
const Router= express.Router();
const authController= require('./../controllers/authController');
const analystController=require('./../controllers/analystPost');
const dealersController=require('./../controllers/dealersController');
const paymentController=require('./../controllers/paymentController');
const adminController=require('./../controllers/adminController');
 Router.route('/signUp').post(authController.signUp);
 Router.route('/login').post(authController.login);
 Router.route('/logout').post(authController.logout);
 Router.route('/createPost').post(authController.protect,authController.ristrictTo("farmer"),analystController.upload.array("cropPhoto",5),analystController.resizePhoto,analystController.createPost)
 Router.route('/updateMe').patch(authController.protect,authController.upload.single("photo"),authController.resizeUserImage,authController.updateMe)
 Router.route('/createDeal').post(authController.protect,authController.ristrictTo("farmer","analyst"),dealersController.upload.array("cropPhoto",5),dealersController.resizePhoto,dealersController.createPost)
 Router.route('/payment').post(paymentController.createOrder);
 Router.route('/removeUser').delete(adminController.removeUser);
 Router.route('/marketPrice').get(analystController.getMarketPrices);
 module.exports=Router;