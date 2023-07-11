const fs = require('fs')
const path = require('path')
const Product = require('../models/productModel');
const { readFileProm, writeFileProm } = require('../utils/fsPromise');

const p = path.join(
  path.dirname(__dirname), 'data', 'cart.json'
)

module.exports = class Cart {
  static async addProduct(id, username) {

    try {
      const filename = `${username}.json`;
      let cart = {}
      if (fs.existsSync(filename)) {
        const fileContent = await readFileProm(filename);
        cart = JSON.parse(fileContent);
        if (cart[id]) {
          cart[id].qty += 1;
        } else {
          const products = await Product.fetchAll();
          const found = products.find((product) => product.id === id);
          if (found) {
            cart[id] = {
              qty: 1,
              ...found,
            }
          } else {
            throw new Error('Something Wrong')
          }

        }
      } else {
        const products = await Product.fetchAll();
        console.log("LL: Cart -> addProduct -> products", id)
        const found = products.find((product) => product.id === id);
        if (found) {
          cart[id] = {
            qty: 1,
            ...found,
          }
        } else {
          throw new Error('Something Wrong')
        }
      }
      await writeFileProm(filename, JSON.stringify(cart));
      return cart
    } catch (error) {
      console.log("LL: Cart -> addProduct -> error", error)
      throw new Error('Something Wrong')
    }
    // Fetch the previous cart



  }

  static async fetchCart(username) {
    try {
      if (fs.existsSync(`${username}.json`)) {
        const fileContent = await readFileProm(`${username}.json`);
        const cart = JSON.parse(fileContent)
        return cart;
      } else {
        return {};
      }
    } catch (error) {
      throw new Error('Something Wrong')
    }
  }
}
