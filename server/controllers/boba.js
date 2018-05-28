const Boba = require('../models/boba');

// add new boba drink to the database
exports.addBoba = (req,res) => {
	let boba = new Boba({
		name: req.body.name,
		shop: req.body.shop,
		sweetness: req.body.sweetness,
		toppings: req.body.toppings,
		ice: req.body.ice,
		description: req.body.description,
		user_id: req.body.user_id
	});
	boba.save((err, boba) => {
		if (err) {
			res.send(err);
		} else {
			res.send(boba);
			console.log(boba);
		}
	});
};

// grabs all the boba from the database
exports.getAllBoba = (req,res) => {
	Boba.find((err,bobas) => {
		if (err) {
			res.send(err);
		} else {
			res.send(bobas);
		}
	});
};

// gets one boba based on boba_id
exports.getBoba = (req,res) => {
	Boba.find({_id: req.params.boba_id}, (err, boba) => {
		if (err) {
			res.send(err);
		} else {
			res.send(boba);
		}
	});
};

// gets all the bobas from a specific user based off of user_id
exports.getAllUserBobas = (req,res) => {
	Boba.find({user_id:req.params.user_id}, (err, bobas) => {
		if (err) {
			res.send(err);
		} else {
			res.send(bobas);
		}
	});
};

// gets one boba based on user_id and boba_id
exports.getUserBoba = (req,res) => {
	Boba.find({user_id:req.body.user_id, _id: req.params.boba_id}, (err, boba) => {
		if (err) {
			res.send(err);
		} else {
			res.send(boba);
		}
	});
};

// updates exisiting user boba
exports.editUserBoba = (req,res) => {
	Boba.update({_id: req.params.boba_id, user_id: req.body.user_id},
	 {
	 	name: req.body.name,
	 	shop: req.body.shop,
	 	sweetness: req.body.sweetness,
	 	toppings: req.body.toppings,
	 	ice: req.body.ice,
	 	description: req.body.description
	 }, (err) => {
	 	if (err) {
	 		res.send(err);
	 	} else {
	 		res.send("successfully updated boba.");
	 	}
	 });
};

// removes boba from the database
exports.removeUserBoba = (req,res) => {
	Boba.remove({_id: req.params.boba_id, user_id: req.body.user_id}, (err) => {
		if (err) {
			res.send(err);
		} else {
			res.send("Successfully removed boba.");
		}
	});
};

exports.updateReviews = (req,res) => {
	Boba.update({_id: req.params.boba_id}, {
		reviews: req.body.reviews
	}, (err, reviews) => {
		if (err) {
			res.send(err);
		} else {
			res.send(reviews);
		}
	});
};
