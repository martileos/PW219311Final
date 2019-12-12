const express = require("express");
const rutas = express.Router();
const entradasController = require("../controllers/entradasController");

/*rutas.get("/", (req,res)=>{
	res.send("Hola node");
});*/

rutas.get("/",entradasController.list);
rutas.post("/add", entradasController.save);
rutas.get("/delete/:id", entradasController.delete);
rutas.get("/update/:id", entradasController.edit);
rutas.post("/update/:id",entradasController.update);

module.exports = rutas; 