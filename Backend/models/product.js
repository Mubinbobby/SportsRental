const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {

    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    category : {type : String , required : true},
    brand : {type : String , required : true},
    availability : {type : Boolean , required : true} , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    rentPerHour : {type : Number , required : true}


}, {timestamps : true}

)

module.exports = mongoose.model("Product", ProductSchema);
