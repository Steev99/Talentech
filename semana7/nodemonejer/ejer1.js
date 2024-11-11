const express=require('express');
const app=express();
const puerto=4000;

app.get('/',(req, res)=>{
    res.send('Hola Chuchiana');
});
app.get('/saludo/:nombre',(req, res)=>{
    const nombre=req.params.nombre;
    res.send(`Hola Chuchiana ${nombre} ¿como estas hoy?`);
});

app.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
