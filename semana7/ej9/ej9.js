const express=require('express');
const app=express();
const puerto=3002;

app.get('/',(req,res)=>{
    res.send('Bienvenidos a mi primer servidor con Express');
});
app.listen(puerto, (err)=>{
    if(err){
        console,error('No se pudo levantar el server');
    }
    console.log('Servidor corriendo en el puerto' + puerto);
});