
const { verifyToken } = require("../helpers/jwt")
let { User } = require("../models")

module.exports = async function roleAuthenticate(req, res, next){
    try {
        // console.log("testing authentication")
        let bearToken = req.headers.authorization
    
        if (!bearToken){
            throw {name: "HttpError", status: 401, message:"'Invalid Token (...dumbass)'"}
        }
        
        let tokenReal = bearToken.split(" ")[1]
    
        let unprotectedToken = verifyToken(tokenReal)
    
        let checkUser =  await User.findByPk(unprotectedToken.id)
        
        if (!checkUser){
            throw {name: "HttpError", status: 401, message:"'Invalid Token (...dumbass)'"}
        }

        req.user = checkUser
        
        next()
    } catch (error) {
        next(error)
    }
}