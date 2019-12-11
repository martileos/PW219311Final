const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Ventas",(err,Ventas)=>{
			if(err){
				res.json(err)
			}
			//console.log(customers);
			res.render("venta",{
				data: Ventas
			})
		})
	})
}

controller.save = (req,res) =>{
	console.log(req.body);
	const data = req.body;
	req.getConnection((err, conn)=>{
		conn.query("INSERT INTO Ventas set ?",[data],(err,Venta)=>{
			res.redirect("/");
		});
	})
}

controller.delete = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("DELETE FROM Ventas WHERE id = ?",[id], (err,rows)=>{
			res.redirect("/");
		});
	})
}

controller.edit = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Ventas WHERE id = ?",[id], (err,Venta)=>{
			//llamar pantalla de edicion de datos
			res.render("venta-edit",{
				data: venta[0] 
			})
		})
	});
}

controller.update = (req, res) =>{
	const { id } = req.params;
	const newVentas = req.body;
	req.getConnection((err,conn)=>{
		conn.query("UPDATE Ventas set ? WHERE id = ?",[newVentas, id], (err, rows)=>{
			res.redirect("/");
		})
	})
}

module.exports = controller;