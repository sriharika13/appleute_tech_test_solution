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

    static fetchAll(){
        return new Promise((resolve, reject) => {
            fs.readFile(p, (err, fileContent)=>{
                if(err) return reject("Something Went Wrong")
                const productsArr= JSON.parse(fileContent)
                resolve(productsArr)
            })
        })
        
       
    }
}
