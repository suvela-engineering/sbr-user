var express = require('express');
var app = express();
var router = express.Router();

let ctrl = require('../controllers/userController');

router.route('/api/users').
    get(ctrl.fetchUsers);

router.route('/api/user/:userId').
    get(ctrl.fetchUserById);

// Julkaistaan ao. funktiot tämän js-filun ulkopuolelle
module.exports = router;