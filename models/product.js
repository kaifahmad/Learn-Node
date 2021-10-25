// Model file

const fs = require('fs');
const path = require('path');

//getting the Root Directory
const root = require('../util/path');

const p = path.join(root, 'data', 'products.json');

let products = [];

//Helper Function for Reading files from the data
const getProdFromFile = (cb)=>{
    fs.readFile(p,(err, fileContent)=>{
        if(!err) {
            products = JSON.parse(fileContent);
            cb(products);
        }
        else cb([]);
    });
}

// Product class Definition
module.exports = class Product {
    constructor(t) {
        this.book_title = t.book_title;
        this.book_price = t.book_price;
        this.book_description = t.book_description;
    }
    save() {
        getProdFromFile((products)=> {
            products.push(this);
            console.log(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProdFromFile(cb);
    }
}