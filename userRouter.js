const router=require('express').Router();
const Joi=require('joi');
const mongoose=require('mongoose');

const joiUser=require('./joiPost');
const MongooseUser=require('./userModel');
const url='mongodb://localhost:27017/test';


router.post('/users',(req,res)=>{
    var user=req.body;
    Joi.validate(req.body,joiUser.postJoi,(err,value)=>{
        if(err){
            res.status(400).send('Joi'+err.message);
        }else{
            mongoose.connect(url);
            var user1=new MongooseUser(user);
            user1.save((error,response)=>{
                if(error){   
                res.status(400).send('Mongoose'+error.message);
                }
                else{
                res.status(201).send(response);
                }
                mongoose.connection.close();
            })
        }
    })    
})



router.get('/users',(req,res)=>{
    mongoose.connect(url);
    mongoose.model('User').find({},(err,response)=>{
        if(err){
            res.status(500).send(err.message);
        }else{
            res.status(200).send(response);
        }
        mongoose.connection.close();
    });

    })

router.get('/users/:id',(req,res)=>{
    mongoose.connect(url);
    mongoose.model('User').findOne({id:req.params.id},(err,response)=>{
                if(err){
                    res.status(404).send(err.message);
                }else{
                    res.status(200).send(response);
                }
            })
  })


router.put('/users/:id',(req,res)=>{
    Joi.validate(req.body,joiUser.putJoi,(err,value)=>{
        if(err){
            res.status(400).send(err.message);
        }else{
            mongoose.connect(url);
            // {new:true} is used so that findOneAndUpdate will return the new object after updating it
            mongoose.model('User').findOneAndUpdate({id:req.params.id},{$set:{name:req.body.name}},{new:true},(err,response)=>{
            if(err){
            res.status(500).send(err.message);
            }else{
            res.status(200).send(response);
        }
    })
    }
})
});


router.delete('/users/:id',(req,res)=>{
    mongoose.connect(url);
    mongoose.model('User').findOneAndDelete({id:req.params.id},(err,reponse)=>{
        if(err){
            res.status(500).send(err.message);
        }else{
            res.status(202).send('Profile deleted');
        }
        mongoose.connection.close();
    });
});




module.exports=router;