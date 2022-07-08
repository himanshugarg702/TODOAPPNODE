const express=require('express');
const app=express();
const port=7000;
// use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));
// app.post('/action/create-task',function(req,res){
//   console.log(res);
// })
app.listen(port,function(err){
    if(err){
        console.log(`Error is running the server ${port}`);
    }
    console.log(`Server is running on port: ${port}`);
})