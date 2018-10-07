const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const Account = require('../class/account')
const accout = new Account()
module.exports = function (passport) {

    passport.use(new LocalStrategy(async function (username, password, done) {
        try {
            const result = await accout.login({ username: username, password: password })
            console.log(result)
            if (result.return_code === '200') {
                return done(null, result.account)
            } else {
                console.log(result)
                return done(null, false, { message: 'Wrong Username or Password' })
            }

        } catch (error) {
            return error.data
        }
    }))

    passport.serializeUser(function (user, done) {

        console.log('serialize ' + JSON.stringify(user))
        console.log(user)

        done(null, user.username)
    });

    passport.deserializeUser(async function (user, done) {
        const result = await accout.getAccountBy(user)
        done(null, result || null)
    });

}