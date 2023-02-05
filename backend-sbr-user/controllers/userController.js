const sql = require('../db/userQueries.js');

module.exports = {
    fetchUsers: async (req, res) => {
        let sFetchUsers = "fetchUsers";
        console.log(sFetchUsers + " , started ...");
        try {
            let u = await sql.getUsers();
            res.json({ status: "OK", users: u.rows });
            console.log(sFetchUsers + " , done");
        } catch (error) {
            res.statusCode = 400;
            console.log(sFetchUsers + " , Error in server.");
            res.json({ status: "NOT OK", msg: error });
        }
    },
    fetchUserById: async (req, res) => {
        let sfetchUsersById = "fetchUsersById";
        console.log(sfetchUsersById + " , started ...");
        try {
            // console.log("/fetchUserById. req.params.userId:", req.params.userId);
            let userId = null;

            if (req.params.userId)
                userId = req.params.userId;

            if (userId == null) {
                throw "User id is null.";
            }

            else if (isNaN(userId)) {
                throw "User id is not a number.";
            }

            let u = await sql.getUserById(userId);

            res.json({ status: "OK", user: u.rows });
            console.log(sfetchUsersById + " , done");
        } catch (error) {
            res.statusCode = 400;
            console.log(sfetchUsersById + " , Error in server.");
            res.json({ status: "NOT OK", msg: error });
        }
    },
}