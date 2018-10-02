const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const Account = require('../routes/accountToDataBase')
const accout = new Account()
module.exports = function(passport){

    passport.use(new LocalStrategy(async function(username,password,done){
        try{
        const result = await accout.login({username:username,password:password})
        if(result.return_code='200'){
            return done(null,username)
        }else{
            return done(null,false,{message:'Wrong Username or Password'})
        }

        }catch(error){
            return error.data
        }
    }))
}