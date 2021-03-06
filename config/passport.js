const passport = require('passport');
const dotenv = require('dotenv');
dotenv.config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User')



module.exports = (passport) => {
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true
  },
      async function (accessToken, refreshToken, profile, done) {

          // console.log("Trying to access google account ", profile);

          try {
              let user = await User.findOne({ googleId: profile.id });
              if (user) {
                  console.log("user is there");
                  done(null, user);
              } else {
                  const newUser = { 
                      googleId: profile.id,
                      name: profile.displayName,
                  };
                  user = await User.create(newUser);
                  console.log("creating new user");
                  done(null, user);
              }
          } catch (err) {
              console.error(err);
          }

      }
  ));

  passport.serializeUser(function (user, done) {
      return done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
      User.findById(id, function (err, user) {
          return done(err, user);
      });
  });
}






