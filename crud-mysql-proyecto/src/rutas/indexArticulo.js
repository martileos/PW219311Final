const express = require("express");
const rutas = express.Router();
const articuloController = require("../controllers/articuloController");

/*rutas.get("/", (req,res)=>{
	res.send("Hola node");
});*/

rutas.get("/", articuloController.list);
rutas.post("/add", articuloController.save);
rutas.get("/delete/:id", articuloController.delete);
rutas.get("/update/:id", articuloController.edit);
rutas.post("/update/:id",articuloController.update);

module.exports = rutas; 