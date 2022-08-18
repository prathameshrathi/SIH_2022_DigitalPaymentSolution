const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const operatorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    upiId:{
        type: String,
        required: true,
    },
    uid:{
        type : Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
}
);

operatorSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8);
        next();
    }
});

operatorSchema.methods.generateAuthToken  = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        console.log(token);
        // console.log("hi");
        return token;
    }
    catch(err){
        console.log(err);
    }
}

const Operator = mongoose.model('OPERATOR',operatorSchema);
module.exports = Operator;