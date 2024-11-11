const Logger = require('logplease');
const logger = Logger . create ('utlis');
const {esPar}= require('./numeros')

const numeros=[10,20,30,40,50,60,77,80,90,100]
numeros.forEach(numero=>{
    if (esPar(numero)){
        logger.info(`El número ${numero} es par`);
    }else{
        logger.debug(`El número ${numero} es impar`);
    }
});