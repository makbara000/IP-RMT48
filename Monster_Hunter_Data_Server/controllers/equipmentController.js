const axios = require('axios');
let {Monster, User, Wishlist} = require('../models')


class EquimentController {
    static async weaponsData(req, res, next){
        try {
            const response = await axios({
                method: "GET",
                url: "https://mhw-db.com/weapons"
            })
            console.log(response.data)
            res.json(response.data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async weaponsDataId(req, res, next){
        try {
            const {id} = req.params
            const response = await axios({
                method: "GET",
                url: "https://mhw-db.com/weapons/" + id
            })
            console.log(response.data)
            res.json(response.data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async armorsData(req, res, next){
        try {
            const response = await axios({
                method: "GET",
                url: "https://mhw-db.com/armor/sets"
            })
            console.log(response.data)
            res.json(response.data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async armorsDataId(req, res, next){
        try {
            const {id} = req.params
            const response = await axios({
                method: "GET",
                url: "https://mhw-db.com/armor/sets/" + id
            })
            console.log(response.data)
            res.json(response.data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = EquimentController