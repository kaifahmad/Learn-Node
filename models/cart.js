// Model file

//Require Util Data base
const db = require("../util/database");

// const p = path.join(root, "data", "products.json");
module.exports = class Cart {
    constructor(t) {
      this.created_At = t.created_At;
      this.updated_At = t.updated_At;
      this.user_id = t.user_id;
    }
    save() {
        return db.execute(
            "INSERT INTO cart (Created_At,Updated_At,user_id) VALUES (?,?,?)",
            [this.created_At, this.updated_At,this.user_id]
          );
    }
    static getCartId(user_id) {
        return db.execute('SELECT ID FROM cart WHERE User_id= ?',[user_id]);
    }

    static deleteById(prod_id) {
        return db.execute(' DELETE FROM cart WHERE Product_Id= ?',[prod_id]);
    }

    
}