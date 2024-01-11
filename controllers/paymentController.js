const orders= require('./../models/ordersModel');
exports.createOrder= async (req,res)=>
{
    try{
        const order= await orders.create({Id:req.body.Id, nameOnCard:req.body.nameOnCard, creditCardNo:req.body.creditCardNo, expMonth:req.body.expMonth, expYear:req.body.expYear})
    }catch(e)
    {
        console.log(e)
    }
}
