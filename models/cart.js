// Model file

//Require Util Data base
const db = require("../util/database");

// const p = path.join(root, "data", "products.json");
module.exports = class Cart {
    constructor(t) {
      this.product_id = t.product_id;
      this.product_qty = t.product_qty;
      this.user_id = t.user_id;
    }
    save() {
        return db.execute(
            "INSERT INTO cart (Product_Id,Quantity,user_id) VALUES (?,?,?)",
            [this.product_id, this.product_qty,this.user_id]
          );
    }

    static incrementQty(prod_id) {
        return db.execute('UPDATE cart SET Quantity = Quantity+1 WHERE Product_Id= ?',[prod_id]); 
    }

    static decrementQty(prod_id) {
        return db.execute('UPDATE cart SET Quantity = Quantity-1 WHERE Product_Id= ?',[prod_id]); 
    }

    static getProdById(prod_id) {
        return db.execute('SELECT * FROM cart WHERE Product_Id= ?',[prod_id]); 
    }

    static deleteById(prod_id) {
        return db.execute(' DELETE FROM cart WHERE Product_Id= ?',[prod_id]);
      }

    static getAllCart() {
        return db.execute('SELECT products.ID, products.Name,products.price,cart.Quantity FROM products RIGHT JOIN cart ON products.ID=cart.Product_Id'); 
    }
}