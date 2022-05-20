const pino = require("pino");

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
      ignore: "pid,hostname"
    },
  },
});

const infoRoute = (req, res, next) => {
  logger.info(`Metodo ${req.method} en ruta ${req.protocol}://${req.get('host')}${req.originalUrl}.`);
  next();
};

module.exports = {
  pino,
  logger,
  infoRoute
};
