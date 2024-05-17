let {Monster, User, Wishlist} = require('../models')
const midtransClient = require('midtrans-client');

class Controller {
    static async midtransToken(req, res, next){
        // const data = await Wishlist.findAll()
        // console.log(req.user)
        const data = await User.findByPk(req.user.id)
        // const {price} = req.body
        // console.log(data)
        try {
            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction : false,
                serverKey : process.env.MIDTRANS_SERVER_KEY,
            });

            const OrderId = Math.floor(100000 + Math.random() * 900000).toString()
            const price = Number(req.query.price)

            let parameter = {
                transaction_details: {
                    order_id: OrderId,
                    gross_amount: price
                },
                credit_card:{
                    secure : true
                },
                customer_details: {
                    email: data.email,
                }
            };
            const midtransToken = await snap.createTransaction(parameter)
            
            await Wishlist.create({
                OrderId,
                price,
                UserId: req.user.id,
                transactionToken: midtransToken.token
            })

            res.status(201).json(midtransToken)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller