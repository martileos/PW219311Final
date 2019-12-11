const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Clientes",(err,Clientes)=>{
			if(err){
				res.json(err)
			}
			//console.log(customers);
			res.render("cliente",{
				data: Clientes
			})
		})
	})
}

controller.save = (req,res) =>{
	console.log(req.body);
	const data = req.body;
	req.getConnection((err, conn)=>{
		conn.query("INSERT INTO Clientes set ?",[data],(err,Cliente)=>{
			res.redirect("/");
		});
	})
}

controller.delete = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("DELETE FROM Clientes WHERE id = ?",[id], (err,rows)=>{
			res.redirect("/");
		});
	})
}

controller.edit = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM Clientes WHERE id = ?",[id], (err,Cliente)=>{
			//llamar pantalla de edicion de datos
			res.render("cliente-edit",{
				data: Cliente[0] 
			})
		})
	});
}

controller.update = (req, res) =>{
	const { id } = req.params;
	const newCliente = req.body;
	req.getConnection((err,conn)=>{
		conn.query("UPDATE Clientes set ? WHERE id = ?",[newCliente, id], (err, rows)=>{
			res.redirect("/");
		})
	})
}

module.exports = controller;