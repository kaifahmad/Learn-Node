// Model file

// const fs = require("fs");
const path = require("path");

//getting the Root Directory
const root = require("../util/path");

//Require Util Data base
const db = require("../util/database");

// const p = path.join(root, "data", "products.json");

// Product class Definition
module.exports = class Product {
  constructor(t) {
    this.book_title = t.book_title;
    this.book_price = t.book_price;
    this.book_description = t.book_description;
    this.book_category = t.book_category;
    
  }
  save() {
    return db.execute(
      "INSERT INTO products (Name,Price,Description,Category) VALUES (?,?,?,?)",
      [this.book_title, this.book_price, this.book_description, this.book_category]
    );
   
  }

  static deleteById(id) {
    
    return db.execute(' DELETE FROM products WHERE ID= ?',[id]);
  }
  static findById(id) {
      return db.execute('SELECT * FROM products WHERE ID= ?',[id]);
  }
  static updateById(data) {
      return db.execute('UPDATE products SET Name = ?, Price = ?, Description = ?, Category = ? WHERE ID= ?',[data.book_title, data.book_price, data.book_description, data.book_category, data.book_id]);
      // return db.execute('SELECT * FROM products WHERE ID= ?',[id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
};
