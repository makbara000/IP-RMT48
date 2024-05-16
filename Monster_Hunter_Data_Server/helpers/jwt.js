let jwt = require('jsonwebtoken');

let JWT_SECRET = process.env.JWT_SECRET

let signToken = (payload) =>{
    return jwt.sign(payload, JWT_SECRET)
}
let verifyToken = (token) =>{
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {signToken, verifyToken}

