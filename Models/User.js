import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        lowercase: true
    },
    username: {
        type: Schema.Types.String,
        unique:true,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: false,
        trim: true,
        lowercase: true,
    },
    address: {
        type: Schema.Types.String,
        required: false,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: Schema.Types.Number,
        required: false,
    },
    children: {
        type: Schema.Types.Number,
        required: false,
    },
    married: {
        type: Schema.Types.String,
        required: false,
        enum:['Married','Single']

    },
    avatar: {
        type: Schema.Types.String,
        required: false,
    },
    remember_token: {
        type: Schema.Types.String,
        required: false,
    },
    gender: {
        type: Schema.Types.String,
        required: false,
        enum:['male','female']
    },
    birth_day: {
        type: Schema.Types.Date,
        required: false,
    },
    work_year: {
        type: Schema.Types.Decimal128,
        required: false,
    },
    status: {
        type: Schema.Types.Boolean,
        default: true,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        nullable: true,
    },
    role: [{
        type: Schema.Types.ObjectId,
        ref: "Role",
        nullable: true,
    }],
    permission: [{
        type: Schema.Types.ObjectId,
        ref: "Permission",
        nullable: true,
    }]

})
export default mongoose.model("User", User, "User")