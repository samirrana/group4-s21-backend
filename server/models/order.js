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
    "orderAddress": [{
        "deliveryName": String,
        "aptNo": Number,
        "streetName": String,
        "city": String,
        "postalCode": String,
        "modeOfPayment":String
    }],
    "orderDeliveryDate":String,
    "orderPlacedDate":String,
    "cancellationReason":String,
    "cancellationDesc":String
}

let orderModel = mongoose.Schema(schema , { collection: 'Orders' });
module.exports = mongoose.model('Orders', orderModel);