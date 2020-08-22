const mongoose=require("mongoose");

const deviceSchema=new mongoose.Schema(
    {
        deviceId: {
            type : String,
            required : true
        },
        location :{
            type : String,
            required : true
        },
        time : {
            type : data,
            default :Date.now
            
        }
    }
)

module.exports=mongoose.model(device,deviceSchema)

