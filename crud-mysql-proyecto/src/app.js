const path = require("path");
const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const app = express();

//Importar rutas
const indiceRutas = require("./rutas/indexAlmacen.js");
const indiceRutas = require("./rutas/indexArticulo.js");
const indiceRutas = require("./rutas/indexCliente.js");
const indiceRutas = require("./rutas/indexEntradas.js");
const indiceRutas = require("./rutas/indexCliente.js");
const indiceRutas = require("./rutas/indexVenta.js");

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"vistas"))

//Middleware
app.use(myConnection(mysql,{
	host: "localhost",
	user: "root",
	password: "",
	port: 3306,
	database: "crudnodejsmysql"
},"single"));
app.use(express.urlencoded({extended: false}));

//Usamos rutas
app.use("/", indiceRutas);

app.listen(app.get("port"),() =>{
	console.log("Escuchando en el puerto 3000");
})