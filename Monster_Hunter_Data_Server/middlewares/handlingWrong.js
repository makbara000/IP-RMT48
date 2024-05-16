

module.exports = function handlingWrong(error, req, res, next){
    console.log(error.name, error.status)
    console.log(error)
    if(error.name == "LoginDataNotFound"){
        res.status(401).json({message: "Invalid email/password (Nope nothing hier)"})
    }else if(error.name == "LoginCredentialNotFound"){
        res.status(400).json({message: 'Email/Password required (Well ya got me)'})
    }else if(error.name == "SequelizeUniqueConstraintError"){
        res.status(400).json({message: error.errors[0].message})
    }else if(error.name == "SequelizeValidationError"){
        res.status(400).json({message: error.errors[0].message})
    }else if(error.name == 'ArticleNotFound'){
        res.status(404).json({message: error.message})
    }else if(error.name == 'CategoryNotFound'){
        res.status(404).json({message: error.message})
    }else if(error.name == "JsonWebTokenError"){
        res.status(401).json({message: 'Invalid Token (...dumbass)'})
    }else if(error.name == "HttpError"){
        res.status(error.status).json({message: error.message})
    }else if(error.name == "AuthorizationError"){
        res.status(403).json({message:"Forbidden Access(Not allowed chucklenut)"})
    }else if(error.name == "ImageNotFound"){
        res.status(400).json({message: error.message})
    }else{
        res.status(500).json({
            message: "Internal server error(Oopsie Daisy, my bad :D)"
        })
    }
}