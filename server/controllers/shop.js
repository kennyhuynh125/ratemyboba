const Shop = require('../models/shop');

// adds a shop to the database
exports.addShop = (req, res) => {
	let shop = new Shop();
	shop.city = req.body.city;
	shop.address = req.body.address;
	shop.state = req.body.state;
	shop.name = req.body.name;

	shop.save((err, shop) => {
		if (err) {
			res.send(err);
		} else {
			res.send(shop);
		}
	});
};

