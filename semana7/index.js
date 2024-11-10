const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hola mundo de node`);
logger.log(`Información de ultimo momento`);
logger.info(`Esto es una información`);
logger.warn(`Esto es una alerta`);
logger.error(`Esto es un error`);