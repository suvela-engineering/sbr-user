const sql = require('../db/userQueries.js');

module.exports = {
    fetchUsers: async (req, res) => {
        let sFetchUsers = "fetchUsers";
        console.log(sFetchUsers +" , started ...");
        try {
            let u = await sql.getUsers();
            res.json({ status: "OK", users : u.rows });
            console.log(sFetchUsers +" , done");
        } catch (error) {
            console.log(sFetchUsers +" , Error in server");
            res.json({status : "NOT OK", msg : error});
        }
    },
}