const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const genuid = require('generate-unique-id');

module.exports = function (passport) {

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        let uidarr=profile.emails[0].value.split("@");
        let uid=uidarr[0];
        const id = genuid({
        length: 4,
        useLetters: false
        });
        let upass = uid+ ""+ id + "@udgam-pass";
        uid+=id+"@udgam";
       
        //get the user data from google 
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          password:"",
          uid: uid,
          upass:0,
          upassid:upass,
          w1:0,
          w2:0,
          w3:0,
          w4:0,
          w5:0,
          pmx:0,
          disrupt:0,
          dframe:0,
          coding_collab:0,
          strategy_storm:0,
          gaming:0
        }

        try {
          //find the user in our database 
          let user = await User.findOne({ googleId: profile.id })

          if (user) {
            //If user present in our database.
            done(null, user)
          } else {
            // if user is not preset in our database save user data to database.
            user = await User.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )
  )

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
} 