// Model file

//Require Util Data base
const db = require("../util/database");

// Product class Definition
module.exports = class Product {
  constructor(t) {
    this.first_name = t.first_name;
    this.last_name = t.last_name;
    this.user_role = t.user_role;
    this.status = t.status;
    this.email = t.email;
    this.password = t.password;
  }
  save() {
    return db.execute(
      "INSERT INTO users (first_name,last_name,user_role,status,email,password) VALUES (?,?,?,?,?,?)",
      [this.first_name, this.last_name, this.user_role, this.status,this.email,this.password]
    );
   
  }
}