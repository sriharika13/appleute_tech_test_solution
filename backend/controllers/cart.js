const Cart = require('../models/cartModel')
const Product = require('../models/productModel')

exports.getCart = async (req, res) => {
    console.log("LL: exports.getCart -> req.user.username", req.user.username)

    const data = await Cart.fetchCart(req.user.username)
    res.status(200).json(data)
}

exports.postCart = async (req, res) => {
    const prodId = req.body.prodId;
    res.status(200).json(await Cart.addProduct(prodId, req.user.username))
}
