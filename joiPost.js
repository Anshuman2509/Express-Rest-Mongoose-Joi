const Joi=require('joi');


let userJoiSchema=Joi.object().keys({
    id:Joi.number().min(1001).required(),
    name:Joi.string().default('NA'),
    age:Joi.number().min(20).max(70),
    location:Joi.string().min(5),
    isAdmin:Joi.boolean().default(false)
});


let updateNameSchema=Joi.object().keys({
    name:Joi.string().required()
});
module.exports.postJoi=userJoiSchema;
module.exports.putJoi=updateNameSchema;