import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const Role = new Schema({
    name: {
        type: Schema.Types.String,
    },
    permission: [{
        type: Schema.Types.ObjectId,
        ref: "Permission",
        nullable: true,
    }]


})
export default mongoose.model("Role", Role, "Role")