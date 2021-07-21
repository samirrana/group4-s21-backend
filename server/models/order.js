let mongoose = require('mongoose');

const schema  = {
    "orderId": String,
    "userId": String,
    "orderStatus": String,
    "products": [{
        "giftId": String,
        "quantity": Number,
        "productImage": String,
        "productName": String
    }],
    "orderAddress":String,
    "orderContact":String,
    "cancellationReason":String,
    "cancellationDesc":String
}

let orderModel = mongoose.Schema(schema , { collection: 'Orders' });
module.exports = mongoose.model('Orders', orderModel);