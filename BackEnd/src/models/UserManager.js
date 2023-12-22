const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create({  lastname,
    firstname,
    email,
    password,
    phone,
    birthday,
    adress,
    admin }) {
    const [result] = await this.database.query(
      `insert into ${this.table} ( lastname,
        firstname,
        email,
        password,
        phone,
        birthday,
        adress,
        admin) values (?,?,?,?,?,?,?,?)`,
      [ lastname,
        firstname,
        email,
        password,
        phone,
        birthday,
        adress,
        admin]
    );
    return result;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [result] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }

  async readAll() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
  }

  // The U of CRUD - Update operation

  async update({  id,lastname,
    firstname,
    email,
    password,
    phone,
    birthday,
    adress,
    admin}) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET lastname=?, firstname=?, email=?, password=?,phone=?,birthday=?,adress=?, admin=? WHERE id=?`,
      [lastname,
        firstname,
        email,
        password,
        phone,
        birthday,
        adress,
        admin,
      id]
    );
    return result;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = UserManager;
