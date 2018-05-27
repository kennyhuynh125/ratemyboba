const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const CONFIG = require('./server/config/config.js');
const bobaController = require('./server/controllers/boba');
const shopController = require('./server/controllers/shop');

// create express instance
const app = express();

// use bodyParser to parse JSON 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// if it is in production, connect to production database
if (process.env.NODE_ENV === "production") {
	mongoose.connect(CONFIG.mongo_prod_uri);
	app.use(express.static("client/build"));
} else {
	mongoose.connect(CONFIG.mongo_dev_uri);
}
// use express router to handle routing services
const router = express.Router();

// routes to API
app.get('/getAllBoba', bobaController.getAllBoba);
app.get('/boba/:boba_id', bobaController.getBoba);
app.get('/user_bobas/:user_id', bobaController.getAllUserBobas);
app.get('/user_boba/:boba_id', bobaController.getUserBoba);
app.post('/addBoba', bobaController.addBoba);
app.post('/edit_boba/:boba_id', bobaController.editUserBoba);
app.get('/getShops', shopController.getShops);
app.post('/addShop', shopController.addShop);
app.delete('/remove_boba/:boba_id', bobaController.removeUserBoba);


app.listen(port);
console.log('Listening on port ' + port);