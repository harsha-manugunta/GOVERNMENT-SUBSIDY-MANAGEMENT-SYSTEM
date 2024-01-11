const mongoose= require('mongoose');
const validator=require('validator');
const bcrypt= require('bcryptjs');
const postSchema=mongoose.Schema({

    from:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'you should have posts related to user']
      },
   eventName:String,
   eventAbout:String,
   eventDate:String,
   eventTime:String,
   status:{type:Number,
    default:0,
    max:1
} 
      
    
})


postSchema.pre(/^find/, function(next) {
    
  
    this.populate({
      path: 'from',
      select: 'name phone'
    });
    next();
  });
  
  const post= mongoose.model("post", postSchema);
module.exports = post;



    

