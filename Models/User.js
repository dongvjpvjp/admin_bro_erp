import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const User = new Schema({
    password: {
        type: Schema.Types.String,
        required: true,
    },
    role:{
        type:Schema.Types.String, 
    },
    status:{
        type:Schema.Types.Boolean,
        default:true,
    },
    company:{
        type:Schema.Types.ObjectId, 
        ref:"Company",
        nullable: true,
    },
    role:{
        type:Schema.Types.ObjectId, 
        ref:"Role",
        nullable: true,
    }

})
export default mongoose.model("User", User, "User")