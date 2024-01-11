const express=require('express');
const viewsController=require('./../controllers/viewsController');
const authController=require('./../controllers/authController');
const Router= express.Router();
Router.route('/').get(viewsController.homePage);
Router.route('/login').get(viewsController.login);
Router.route('/signup').get(viewsController.signup);
Router.route('/consultAnalyst').get(authController.protect,authController.ristrictTo('farmer'),viewsController.consultAnalyst);
Router.route('/me').get(authController.protect,viewsController.aboutMe);
Router.route('/updateMe/:id').get(authController.protect,viewsController.updateUser);
Router.route('/consultAnalyst/:anaId').get(authController.protect,authController.ristrictTo('farmer'),viewsController.consultAnalyst);
Router.route('/answerQuery/:reqId').get(authController.protect,authController.ristrictTo('analyst'),viewsController.answerQuery);
Router.route('/consultDealer/:delId').get(authController.protect,authController.ristrictTo('farmer'),viewsController.consultDealer);
Router.route('/acceptDeal/:dealId').get(authController.protect,authController.ristrictTo('dealer'),viewsController.acceptDeal);
Router.route('/dashboard').get(authController.protect, viewsController.dashboard);
Router.route('/dashboard2').get(authController.protect, viewsController.dashboard2);
Router.route('/dashboard3').get(authController.protect, viewsController.dashboard3);
Router.route('/bargain/:dealId').get(authController.protect,authController.ristrictTo('dealer'), viewsController.bargain)
Router.route('/viewBargain').get(viewsController.viewBargain);
Router.route('/viewWether').get(viewsController.wether);
Router.route('/chatBot').get(viewsController.chatBot);
Router.route('/viewPrice').get(viewsController.viewPrice)
Router.route('/paymentMain/:dealId').get(viewsController.payment);
Router.route('/payment/:dealId').get(viewsController.payment2);
Router.route('/tracker/:dealId').get(viewsController.tracker);
Router.route('/productPage').get(viewsController.productPage);
Router.route('/analytics').get(viewsController.analyticsPage);
Router.route('/user/:userId').get(viewsController.userDeatils);
Router.route('/farmersGrowth').get(viewsController.farmersGrowth);
Router.route('/orderStatus').get(viewsController.orderStatus);
Router.route('/removeUser').get(viewsController.removeUser);
Router.route('/getNews').get(viewsController.getNews);
Router.route('/createWorkshop').get(viewsController.createWorkshop);
Router.route('/viewWorkshop').get(viewsController.viewWorkshop);
module.exports=Router