let {Monster, User, Wishlist} = require('../models')
const midtransClient = require('midtrans-client');

class Controller {
    static async midtransToken(req, res, next){
        const data = await Wishlist.findAll()
        const userData = await User.findByPk(req.user.id)
        console.log(data)
        try {
            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction : false,
                serverKey : process.env.MIDTRANS_SERVER_KEY,
            });

            let parameter = {
                transaction_details: {
                    order_id: `ORDER-${Math.floor(100000 + Math.random() + 900000)}-ID`,
                    gross_amount: 10000
                },
                credit_card:{
                    secure : true
                },
                customer_details: {
                    first_name: "budi",
                    last_name: "pratama",
                    email: "budi.pra@example.com",
                    phone: "08111222333"
                }
            };
        } catch (error) {
            
        }
    }
}

module.exports = Controller