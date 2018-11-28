const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const Account = require('../class/account')
const accout = new Account()
module.exports = function (passport) {

    passport.use('user-local',new LocalStrategy(async function (username, password, done) {
        try {
                const result2 =  await accout.login({ username: username, password: password })
                console.log(result2)
                if (result2.return_code === '200') {
                    return done(null, result2.account)
                } else {
                return done(null, false, { message: 'Wrong Username or Password' })
                }

        } catch (error) {
            return error.data
        }
    }))
    passport.use('admin-local',new LocalStrategy(async function (username, password, done) {
        try {
            const result = await accout.loginToAdmin({ username: username, password: password })
            console.log(result)
            if (result.return_code === '200') {
                return done(null, result.account)
            } else {
                return done(null, false, { message: 'Wrong Username or Password' })
            }

        } catch (error) {
            return error.data
        }
    }))

    passport.serializeUser(async function (user, done) {
        //console.log('serialize ' + JSON.stringify(user))
        if(typeof user === 'string'){
            await done(null, user)
        }
        else{
            await done(null, user.username)
        }
    });

    passport.deserializeUser(async (user, done) => {
        if(user.includes("admin")){
            done(null, user || null)
        }
        else{
            const result = await accout.getAccountBy(user)
            console.log(result.account)
            done(null, result.account || null)
        }
    });

}