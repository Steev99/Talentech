const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs").promises;
const app = express();
const db = require('./config/db.js');

// Configuración básica
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal
app.get("/", (req, res) => {res.render("index")});
const puerto = 3000;

// Función para leer el archivo JSON de usuarios
//async function leerUsuarios() {
//  try {
//    const filePath = path.join(__dirname, "data", "usuarios.json");
//    const data = await fs.readFile(filePath, "utf8");
//    return JSON.parse(data);
//  } catch (error) {
//    return [];
  //}
//}

// Función para guardar usuarios
//async function guardarUsuario(usuarios) {
//  try {
//    const filePath = path.join(__dirname, "data", "usuarios.json");
//    await fs.writeFile(filePath, JSON.stringify(usuarios, null, 2), "utf8");
//  } catch (error) {
//    console.error(error);
//  }
//}
//
//// Ruta para registrar usuarios
//app.post("/index", async (req, res) => {
//  try {
//    const nuevoUsuario = {
//      id: Date.now(),
//      nombre: req.body.nombre,
//      email: req.body.email,
//      password: req.body.password,
//      fechaRegistro: new Date().toISOString(),
//    };
//
//    const usuarios = await leerUsuarios();
//
//    if (usuarios.some((user) => user.email === nuevoUsuario.email))
//      return res.status(400).json({
//        success: false,
//        message: "El email ya está registrado",
//      });
//
//    usuarios.push(nuevoUsuario);
//    await guardarUsuario(usuarios);
//
//    res.json({
//      success: true,
//      message: "Usuario registrado exitosamente",
//    });
//  } catch (error) {
//    console.error("Error al procesar el registro:", error);
//    res.status(500).json({
//      success: false,
//      message: "Error al procesar el registro",
//    });
//  }
//});
//
//

app.post('/registro', (req,res) =>{
    const [nombre, email, password] = req.body;
    if(!nombre || !email || !password){
        res.json({
            success: false,
            message: 'Debes llenar todos los campos',    
        })
    }
})

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
