// Model file

//Require Util Data base
const db = require("../util/database");

// Product class Definition
module.exports = class Product {
  constructor(t) {
    this.first_name = t.first_name;
    this.last_name = t.last_name;
    this.user_role = t.user_role;
    this.email = t.email;
    this.password = t.password;
  }
  save() {
    return db.execute(
      "INSERT INTO users (first_name,last_name,user_role,email,password) VALUES (?,?,?,?,?)",
      [
        this.first_name,
        this.last_name,
        this.user_role,
        this.email,
        this.password,
      ]
    );
  }
  static createUserCart(created_at, updated_at, user_id) {
    return db.execute(
      "INSERT INTO cart (Created_At,Updated_At,User_id) VALUES (?,?,?)",
      [created_at, updated_at, user_id]
    );
  }
};
