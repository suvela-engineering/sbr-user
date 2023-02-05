const sql = require('../db/userQueries.js');

module.exports = {
    fetchUsers: async (req, res) => {
        let sFetchUsers = this.fetchUsers.name;
        console.log(sFetchUsers +" , started ...");
        try {
            let u = await sql.getUsers();
            res.json({ status: "OK", users : u });
            console.log(sfetchUsers +" , done");
        } catch (error) {
            console.log(sFetchUsers +" , Error in server");
            res.json({status : "NOT OK", msg : error});
        }
    },
}