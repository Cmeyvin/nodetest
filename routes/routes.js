var addzone = require('scripts/zones/addzone');


module.exports = function(server) {


	server.get('/',function(req,res) {

		res.end("Node Server is running!");

	});

	server.post('/addzone',function(req,res) {

		var data = req.body;
		console.log(req.body);
		//var json = JSON.parse(req.body);
		//console.log(json);

		addzone.addzone(data,function(found) {

			console.log(found);
			res.json(found);

		});

		//res.end("Received OK!");

	});

}