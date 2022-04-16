import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const Permission = new Schema({
    name:{
        type:Schema.Types.String,   
    },
    description:{
        type:Schema.Types.String,  
    },
    uri:{
        type:Schema.Types.String, 
    },
    method:{
        type:Schema.Types.String, 
    },
   

})
export default mongoose.model("Permission", Permission, "Permission")