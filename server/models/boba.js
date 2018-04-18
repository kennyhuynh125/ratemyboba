const mongoose = require('mongoose');

const BobaSchema = new mongoose.Schema({
	name: String,
	shop: String,
	sweetness: String,
	toppings: String,
	ice: String,
	user_id: String,
	description: String
});

module.exports = mongoose.model('Boba', BobaSchema);