const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
  
  },
  displayName: {
    type: String,
    
  },
  email:{
type:String,

  },
  password:{
    type:String,
    
      },
      
  upass:{
        type:Number,
        
        },
  uid:{
    type:String,
  },
  upassid:{
    type:String,
  },
  w1:{
    type:Number,
  },
  w2:{
    type:Number,
  },
  w3:{
    type:Number,
  },
  w4:{
    type:Number,
  },
  w5:{
    type:Number,
  },

  pmx:{
    type:Number,
  },
  disrupt:{
    type:Number,
  },
  dframe:{
    type:Number,
  },
  coding_collab:{
    type:Number,
  },
  strategy_storm:{
    type:Number,
  },
  gaming:{
    type:Number,
  },

})

module.exports = mongoose.model('User', UserSchema)