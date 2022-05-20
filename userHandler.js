const { mongoose } = require("./config/config.js");
const UserSchema = require("./config/schema.js");
const bcrypt = require("bcrypt");

class Usuarios {
  constructor(tabla) {
    this.table = tabla;
  }

  async saveUser({ username, password, direccion }) {
    const usuario = new UserSchema({
      user: username,
      password: bcrypt.hashSync(password, 10),
      email: direccion
    });
    await usuario.save();
  }

  async existUser(usr) {
    const model = mongoose.model(this.table);
    const user = await model.find({ user: usr });
    if (user.length === 0 ) return false;
    return user;
  };

  async compareHash(firstPw, secondPw) {
    return bcrypt.compareSync(firstPw, secondPw);
  };

};

module.exports = new Usuarios('Usuarios');
