const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:'localhost', 
    user:'root', 
    password:'', 
    database: 'registro',
});
conexion.connect((err)=>{
    if(err){
        console.log('Error en la BD', err);
        return;
    }
    else{
        console.log('Conexión a la BD exitosa');
    }
});
module.exports = conexion;