const mongoose = require('mongoose')

const DisruptSchema = new mongoose.Schema({

  leader: {
    type: String,
  
  },

  mem1name: {
    type: String,
  
  },
  mem1email: {
    type: String,
    
  },
  mem1clg:{
type:String,

  },
  mem2name: {
    type: String,
  
  },
  mem2email: {
    type: String,
    
  },
  mem2clg:{
type:String,

  },
teamName:{
type:String,
    
},
      
  
})

module.exports = mongoose.model('Disrupt', DisruptSchema)