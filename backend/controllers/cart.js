const Cart= require('../models/cartModel')
const Product = require('../models/productModel')

exports.getCart=(req, res)=>{
    Cart.fetchCart((cart)=>{
        Product.fetchAll(products=>{
            const cartProducts=[]
            for(product of products){
                const cartProductData= cart.products.find(prod=> prod.id===product.id)
                if(cartProductData){
                    cartProducts.push({productData: product, quantity: cartProductData.quantity} )
                }
            }
            res.send(cartProducts)
        })
    })
}

exports.postCart=(req, res)=>{
    const prodId= "0.8169855202397656"
    // console.log(req.body)
    Product.findById(prodId, product=>{
        Cart.addProduct(prodId, product.price)
    })
    // redirect??
}
