var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

var LOCAL_CONFIG = {
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : 'true'
}
module.exports = function(passport){
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });
    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup',new LocalStrategy(LOCAL_CONFIG,function(req,email,password,done){
        prcoess.nextTick(function(){
            User.findOne({'local-email':email},function(err,user){
                if(err)
                    return done(err);
                if(user)
                    return done(null,false,req.flash('signup message','Email is taken'));
                var newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function(err){
                    if(err)
                        throw err;
                    return done(null,newUser);
                });

            });
        });
    }));
    // =========================================================================
    // LOCAL SIGN IN ============================================================
    // =========================================================================
    passport.use('local-login',new LocalStrategy(LOCAL_CONFIG,function(req,email,password,done){
        User.findOne({'local.email':email},function(err,user){
            if(err)
                return done(err);
            if(!user)
                return done(null,false,req.flash('login message','wrong info'));
            return done(null,user);
        });
    }));
};