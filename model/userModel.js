var mongoose=require('mongoose')

var user = mongoose.Schema(
    {
        username:{type: String ,reuired :true},
        password:{type :String,reuired :true}
    }
);
var userModel=mongoose.model('userAuth',user);
module.exports={userModel};