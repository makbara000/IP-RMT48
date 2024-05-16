const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();
let {Monster, User, Wishlist} = require('../models')
const { compare } = require('../helpers/hashingTime')
const { signToken } = require('../helpers/jwt')

class UserController{
    static async register(req, res, next){
        try {
            let data = await User.create(req.body)
            res.status(201).json({message: "Added new user", data})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async login(req, res, next){
        try {
            let {email, password} = req.body
            if(!email){
                throw{name: 'LoginCredentialNotFound'}

            }
            if(!password){
                throw{name:"LoginCredentialNotFound"}

            }
            let user  = await User.findOne({where: { email }})
            if(!user){
                throw{name:"LoginDataNotFound"}

            }
            let passwordValid = compare(password, user.password)
            if(!passwordValid){
                throw{name:"LoginDataNotFound"}

            }
            let token = signToken({id: user.id})
            console.log(user.toJSON())
            res.status(200).json({message: "login", token})
        } catch (error) {
            next(error)
            
        }
    }
    
    static async loginGoogle(req, res, next){
        console.log(req.body)
        try {
            const {tokenGoogle} = req.body
            const ticket = await client.verifyIdToken({
                idToken: tokenGoogle,
                audience: "882440757919-niaodh2jfd9lkifvs7q2moojb4p3o21n.apps.googleusercontent.com",
            });
            const payload = ticket.getPayload();
            console.log(payload, "test")
            // const userid = payload['sub'];
            const randomPassword = Math.random().toString()
            let user = await User.findOne({where: {email: payload.email}})
            if(!user){
                user = await User.create({
                    email:payload.email,
                    password: randomPassword,
                })
            }
            console.log(user, "test")
            res.status(200).json({message: "Login Successful", payload, user})
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = UserController