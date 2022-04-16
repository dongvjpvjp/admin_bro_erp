import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const Company = new Schema({
    name:{
        type:Schema.Types.String,   
    },
    address:{
        type:Schema.Types.String,  
    },
    phone:{
        type:Schema.Types.Number, 
    },
   

})
export default mongoose.model("Company", Company, "Company")