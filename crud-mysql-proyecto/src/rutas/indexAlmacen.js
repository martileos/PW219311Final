const express = require("express");
const rutas = express.Router();
const clienteController = require("../controllers/almacenController");

/*rutas.get("/", (req,res)=>{
	res.send("Hola node");
});*/

rutas.get("/",almacenController.list);
rutas.post("/add", almacenController.save);
rutas.get("/delete/:id", almacenController.delete);
rutas.get("/update/:id", almacenController.edit);
rutas.post("/update/:id",almacenController.update);

module.exports = rutas; 