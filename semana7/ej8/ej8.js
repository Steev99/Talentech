const http = require('http');
const puerto = 3001;
const servidor =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end('Bienvenidos a mi primer server web')
});
servidor.listen(puerto,(err)=>{
    if(err){
        console,err('No se pudo levantar el server');
    }
    console.log('Servidor corriendo en el puerto' +puerto);
});
