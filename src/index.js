const express =require('express');
const mongoose =require('mongoose');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello')
})


mongoose.connect('mongodb+srv://manarkhaled25599:HgvlY3kyXaW8LXsm@cluster0.m92xzlk.mongodb.net/').then(()=>{
console.log('connected!');
app.listen(3000,()=>{
    console.log("I'm listening in port 3000....")
   })
}).catch((err)=>{
    console.log('Error in connction!',err);
})
;
