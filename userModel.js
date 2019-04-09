const mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    id:{type:Number,min:[1001,'Id cannot be less than 1001'],required:true},
    name:{type:String,default:'NA'},
    age:{type:Number,
        min:[20,'Minmum age is 20 years'],max:[70,'Max age is 70 years']},
    location:{type:String,min:5},
    isAdmin:{type:Boolean,default:false},
});

module.exports=mongoose.model('User',userSchema);