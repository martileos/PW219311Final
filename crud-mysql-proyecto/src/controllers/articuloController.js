const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM articulos",(err,articulos)=>{
			if(err){
				res.json(err)
			}
			//console.log(customers);
			res.render("articulo",{
				data: articulos
			})
		})
	})
}

controller.save = (req,res) =>{
	console.log(req.body);
	const data = req.body;
	req.getConnection((err, conn)=>{
		conn.query("INSERT INTO articulos set ?",[data],(err,articulo)=>{
			res.redirect("/");
		});
	})
}

controller.delete = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("DELETE FROM articulos WHERE id = ?",[id], (err,rows)=>{
			res.redirect("/");
		});
	})
}

controller.edit = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query("SELECT * FROM articulos WHERE id = ?",[id], (err,articulo)=>{
			//llamar pantalla de edicion de datos
			res.render("articulo-edit",{
				data: articulo[0] 
			})
		})
	});
}

controller.update = (req, res) =>{
	const { id } = req.params;
	const newArticulo = req.body;
	req.getConnection((err,conn)=>{
		conn.query("UPDATE articulos set ? WHERE id = ?",[newArticulo, id], (err, rows)=>{
			res.redirect("/");
		})
	})
}

module.exports = controller;