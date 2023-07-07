const Cart= require('../models/cartModel')
const Product = require('../models/productModel')

exports.getOrder=(req, res)=>{
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