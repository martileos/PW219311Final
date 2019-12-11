const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Almacenes",(err,Almacenes)=>{
			if(err){
				res.json(err)
			}
			//console.log(customers);
			res.render("almacen",{
				data: Almacenes
			})
		})
	})
}

controller.save = (req,res) =>{
	console.log(req.body);
	const data = req.body;
	req.getConnection((err, conn)=>{
		conn.query("INSERT INTO Almacenes set ?",[data],(err,Almacen)=>{
			res.redirect("/");
		});
	})
}

controller.delete = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("DELETE FROM Almacenes WHERE id = ?",[id], (err,rows)=>{
			res.redirect("/");
		});
	})
}

controller.edit = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Almacenes WHERE id = ?",[id], (err,Almacen)=>{
			//llamar pantalla de edicion de datos
			res.render("almacen-edit",{
				data: almacen[0] 
			})
		})
	});
}

controller.update = (req, res) =>{
	const { id } = req.params;
	const newAlmacen = req.body;
	req.getConnection((err,conn)=>{
		conn.query("UPDATE Almacenes set ? WHERE id = ?",[newAlmacen, id], (err, rows)=>{
			res.redirect("/");
		})
	})
}

module.exports = controller;