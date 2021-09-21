const mongoose = require("mongoose");
const assignment=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },

    course: {
        type:String,
        required:true
    },

    no: {
        type:Number,
        required:true,
        unique:true
    },

    gender: {
        type:String,
        required:true
    },
    link: {
        type:String,
        required:true,
        
    }

})


const Submit= new mongoose.model("Assignment", assignment);

module.exports=Submit;