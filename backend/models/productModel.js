const fs= require('fs')
const path= require('path')
const Users= require('../models/userModel')
const authController= require('../controllers/auth')

const p= path.join(
    path.dirname(__dirname), 'data', 'products.json'
)

module.exports= class Product{
    constructor(name, description, price, category){
        this.id= Math.random().toString()
        this.name= name
        this.description=description
        this.price= price
        this.category=category;
    }

    // static async addUser(){
    //     const token= await authController.login()
    //     console.log(token)
    //     // Users.getUserByToken()
    // }

    save(){
        let products=[]
        fs.readFile(p, (err, fileContent)=>{
            if(!err) {
                products= JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            })
        })
    }

    static fetchAll(cb){
        fs.readFile(p, (err, fileContent)=>{
            if(err) return cb([])
            const productsArr= JSON.parse(fileContent)
            cb(productsArr)
        })
    }

    static findById(id, cb){
        fs.readFile(p, (err, fileContent)=>{
            const products= JSON.parse(fileContent )
            const product= products.find(p=> p.id=== id)
            cb(product)
        })
    }
}