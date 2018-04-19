require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , students = require('./students.json')

    , app_login = 'http://localhost:3000/#/'
    , app_studentList = 'http://localhost:3000/#/students'

const app = express();

app.use(session({
    secret: process.env.SERVER_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());


passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/login',
    scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
        console.log('helloooooo');
        
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        return done(null, profile);
    }
) );

passport.serializeUser( (user, done) => {
    console.log('hitting serialize');
    
    done(null, {clientID: user.id, email: user._json.email, name: user._json.name});
});
// serialize puts info in the store

passport.deserializeUser( (obj, done) => {
    console.log('hitting deserialize');
    console.log(obj);
    
    
    return done(null, obj)
})

app.get('/login', passport.authenticate('auth0',
        { successRedirect: app_studentList, failureRedirect: app_login, connection: 'github'}
        
    )
);

function authenticated( req, res, next ) {
    if(!req.user) {
        res.sendStatus(401);
    } else {
        next(); // DON'T FORGET TO CALL NEXT WHEN USING MIDDLEWARE
    }
}

app.get('/students', authenticated, (req, res, next) => {
    res.status(200).send( students )
})



const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );