const express = require("express");
const rutas = express.Router();
const clienteController = require("../controllers/clienteController");

/*rutas.get("/", (req,res)=>{
	res.send("Hola node");
});*/

rutas.get("/",clienteController.list);
rutas.post("/add", clienteController.save);
rutas.get("/delete/:id", clienteController.delete);
rutas.get("/update/:id", clienteController.edit);
rutas.post("/update/:id",clienteController.update);

module.exports = rutas; 