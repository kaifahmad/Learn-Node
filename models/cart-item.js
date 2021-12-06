// Model file

//Require Util Data base
const db = require("../util/database");

// const p = path.join(root, "data", "products.json");
module.exports = class Cart_Item {
  constructor(t) {
    //Quantity is taken as 1 by default
    this.created_At = t.created_At;
    this.updated_At = t.updated_At;
    this.cart_id = t.cart_id;
    this.product_id = t.product_id;
  }
  save() {
    return db.execute(
      "INSERT INTO cart_items (Quantity,Created_At,Updated_At,cart_Id,Product_Id) VALUES (?,?,?,?,?)",
      [1, this.created_At, this.updated_At, this.cart_id, this.product_id]
      //We will change this 1 after some time
      //By default we are adding the 1 qty in the cart
    );
  }
  static totalCartItems(cart_id, prod_id) {
    return db.execute(
      "SELECT COUNT(ID) AS totalItems FROM cart_items WHERE Cart_Id=? AND Product_Id=?",
      [cart_id, prod_id]
    );
  }

  static incrementQty(cart_id, prod_id) {
    return db.execute(
      "UPDATE cart_items SET Quantity = Quantity+1 WHERE Cart_Id=? AND Product_Id=?",
      [cart_id, prod_id]
    );
  }

  static getAllCart(user_id) {
    return db.execute(
      "SELECT products.ID,products.Name,products.Price,cart_items.Quantity,cart_items.Cart_Id FROM products JOIN cart_items ON cart_items.Product_Id = products.ID WHERE cart_items.Cart_Id=(SELECT ID FROM cart WHERE User_id=?)",
      [user_id]
    );
  }
  static removeById(product_id, cart_id) {
    return db.execute(
      "DELETE FROM cart_items WHERE Product_Id= ? AND Cart_Id= ?",
      [product_id, cart_id]
    );
  }
};
