const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
    const products= await Product.fetchAll()
    res.send(products)
}

exports.postProduct = (req, res) => {
    const p1 = new Product("Lamp", "beautiful white lamp", 45.55, "Groceries")
    p1.save()
}





