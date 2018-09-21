const express=require('express');
const router=express.Router();
const axios=require('axios');

router.get('/signup',async function(req,res){
    res.render('signup');
});
router.get('/login',async function(req,res){
    res.render('login');
});

router.post('/login',async function(req,res){
   const result=await axios.post('https://us-central1-ninjadrink-25671.cloudfunctions.net/getAccountList',{},{
      headers:{ 
       usaername:req.body.usaername,
       password:req.body.password}
   });
    if(result.return_code=='200'){
        res.redirect('/index');
    }
    else{
        res.send('incorrect username and password');
    }
});

router.post('/signin',async function(req,res){
    const name= req.body.name;
    const email= req.body.email;
    const username= req.body.username;
    const password= req.body.password;
    const password2= req.body.password2;
    const result=await axios.post('https://us-central1-ninjadrink-25671.cloudfunctions.net/getAccountList',{},{
        headers:{ 
         name:name,
         email:email,
         usaername:username,
         password:password,
         password2:password2
        }
     });
     if(result.return_code='200'){
         res.redirect('/login');
     }else{
         res.send('Can not sign up');
     }
    


});

