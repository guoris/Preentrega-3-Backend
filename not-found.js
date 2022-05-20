const { pino, logger } = require("./logger/loggers.js");

module.exports = function notFound(req, res) {
  pino(pino.destination('./logger/logs/warn.log')).warn(`Metodo ${req.method} en ruta ${req.protocol}://${req.get('host')}${req.originalUrl} no encontrado.`);
  logger.warn(`Metodo ${req.method} en ruta ${req.protocol}://${req.get('host')}${req.originalUrl} no encontrado.`);
  res.status(404);
  res.send(`URL no encontrda en: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
};