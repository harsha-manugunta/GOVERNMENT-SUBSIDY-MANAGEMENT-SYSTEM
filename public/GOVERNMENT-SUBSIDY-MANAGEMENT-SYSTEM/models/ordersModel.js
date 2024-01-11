const mongoose= require('mongoose');
const validator=require('validator');
const bcrypt= require('bcryptjs');
const ordersSchema=mongoose.Schema({

    Id:{
        type: mongoose.Schema.ObjectId,
        ref: 'Dealers',
        required: [true, 'you should have posts related to an dealerss']
      },
    nameOnCard:String,
    creditCardNo:String,
    expMonth:String,
    expYear:String,
   status:{type:Number,
    default:0,
    max:1
} 
      
    
})


ordersSchema.pre(/^find/, function(next) {
    
  
    this.populate({
      path: 'Id',
      select: 'to, from, expectedPrice'
    });
    next();
  });
  
  const orders = mongoose.model("orders", ordersSchema);
module.exports = orders;



    

