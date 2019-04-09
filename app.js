/*
This is the starting module of the application. Here have a look at the package.json file. Nodemon has been installed locally. A new test 'audi' has been created in package.json file.So Nodemon can be used the lauch this express server by command 'npm run audi'. Here Joi package has been used for request body validation and mongoose has been used for schema validation and presisence.
*/
const express=require('express');
const bodyParse=require('body-parser');

const app=express();
const userRoute=require('./userRouter');

app.use(bodyParse.json());
app.use('/api',userRoute);

const PORT=process.env.PORT||3000;


app.listen(PORT,()=>{
console.log(`Server running at port ${PORT}`);
})