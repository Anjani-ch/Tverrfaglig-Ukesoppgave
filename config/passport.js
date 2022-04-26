// Require local strategy
const LocalStrategy = require('passport-local').Strategy;

// Require controller methods
const { comparePasswords } = require('../controllers/bcryptController.js');

// Require model
const User = require('../models/User.js');

const initPassport = passport => {
    // Handle authnetication
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        // Get User With Email
        try {
            const user = await User.findOne({ email });
            
            if(user) {
                // Match Passwords
                const isMatch = await comparePasswords(password, user.password);

                let result;

                if (isMatch) result = done(null, user);
                else result = done(null, false, { message: 'Incorrect password' });

                return result;
            } else {
                return done(null, false, { message: 'No user with these credentials' });
            }
        } catch (err) {
            console.log(err);
        }
    }));

    // Save user id in session
    passport.serializeUser((user, done) => done(null, user.id));
    
    // Get use from id stored in session
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);

            done(null, user);
        } catch (err) {
            console.log(err);
            done(err, null);
        }
    });
}

module.exports = initPassport;
