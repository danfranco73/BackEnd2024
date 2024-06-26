import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import userModel from '../models/userModel.js';

/*
AppId: 123456
CliendID: test.test1234
ClientSecret: abcdefghijklmopqabcdefghijklmopq
*/

const initializePassport = () =>{

    const CLIENT_ID = "test.test1234";
    const SECRET_ID = "abcdefghijklmopqabcdefghijklmopq";

    passport.use(
        'github',
        new GitHubStrategy({
            clientID: CLIENT_ID,
            clientSecret: SECRET_ID,
            callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile); 
            let user = await userModel.findOne({username: profile._json.login})
            if(!user) {
                let newUser = {
                    username: profile._json.login,
                    name: profile._json.name,
                    password: ''
                }
                let result = await userModel.create(newUser);
                done(null, result);
            } else {
                done(null, user);
            }
        } catch(error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById(id);
        done(null, user);
    });
};

export default initializePassport;