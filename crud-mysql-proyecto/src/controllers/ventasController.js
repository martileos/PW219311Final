const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Entradas",(err,Entradas)=>{
			if(err){
				res.json(err)
			}
			//console.log(customers);
			res.render("entrada",{
				data: Entradas
			})
		})
	})
}

controller.save = (req,res) =>{
	console.log(req.body);
	const data = req.body;
	req.getConnection((err, conn)=>{
		conn.query("INSERT INTO Entradas set ?",[data],(err,Entrada)=>{
			res.redirect("/");
		});
	})
}

controller.delete = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("DELETE FROM Entradas WHERE id = ?",[id], (err,rows)=>{
			res.redirect("/");
		});
	})
}

controller.edit = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Entradas WHERE id = ?",[id], (err,Entrada)=>{
			//llamar pantalla de edicion de datos
			res.render("entrada-edit",{
				data: entrada[0] 
			})
		})
	});
}

controller.update = (req, res) =>{
	const { id } = req.params;
	const newEntrada = req.body;
	req.getConnection((err,conn)=>{
		conn.query("UPDATE Entradas set ? WHERE id = ?",[newEntrada, id], (err, rows)=>{
			res.redirect("/");
		})
	})
}

module.exports = controller;