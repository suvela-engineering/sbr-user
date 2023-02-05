var express = require('express');
var app = express();
var router = express.Router();

let ctrl = require('../controllers/usersController');

router.route('/api/users').
    get(ctrl.fetchUsers).
    post(ctrl.insertUser);

//router.route('/api/studenttype').
 //   get(ctrl.fetchStudents);
// Julkaistaan ao. funktiot tämän js-filun ulkopuolelle
module.exports = router;