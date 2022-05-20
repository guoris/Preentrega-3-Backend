const { pino } = require("./logger/loggers.js");

class ApiHandler {
  constructor() {
    this.productos = [];
  }

  getProductos() {
    if (this.productos.length === 0) {
      pino(pino.destination('./logger/logs/error.log')).error(`Productos no encontrados.`);
      return { error: 'productos no encontrados' };
    } 
    return this.productos;
  }

  getProductoById(id) {
    let product = this.productos.filter(prod => Number(prod.id) === Number(id));
    if (product.length === 0) {
      pino(pino.destination('./logger/logs/error.log')).error(`Producto con id ${id} no encontrado.`);
      return { error: 'producto no encontrado' };
    }
    return product;
  }

  deleteProductById({ id }) {
    let exist = false;
    for (let i = 0; i < this.productos.length; i++) {
      if (Number(this.productos[i].id) === Number(id)) {
        this.productos.splice(i, 1);
        exist = true;
      }
    }
    if (exist) {
      return this.productos;
    } else {
      pino(pino.destination('./logger/logs/error.log')).error(`Producto con id ${id} a eliminar no encontrado.`);
      return { error: 'producto no encontrado' };
    }
  }

  addProduct(product) {
    const { title, price, thumbnail } = product;
    let id = 0;
    if (this.productos.length < 1) {
      id = 1;
      this.productos.push({ id, title, price, thumbnail });
    } else {
      id = this.productos[this.productos.length - 1].id + 1;
      this.productos.push({ id, title, price, thumbnail });
    }
    console.log(id);
    return product;
  }

  updateProductById({ title, price, thumbnail }, { id }) {
    let exist = false;
    let item = 0;
    for (let i = 0; i < this.productos.length; i++) {
      if (Number(this.productos[i].id) === Number(id)) {
        if (title) this.productos[i].title = title;
        if (price) this.productos[i].price = price;
        if (thumbnail) this.productos[i].thumbnail = thumbnail;
        if (id) this.productos[i].id = id;
        exist = true;
        item = i;
      }
    }
    if (!exist) {
      pino(pino.destination('./logger/logs/error.log')).error(`Productos con id ${id} no encontrado.`);
      return { error: 'producto no encontrado' };
    } 
    return this.productos[item];
  }
};

module.exports = ApiHandler;
