const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
	city: String,
	address: String,
	state: String,
	name: String
});

module.exports = mongoose.model('Shop', ShopSchema);