const pool = require('../pool.env');

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {   
            let query = "SELECT * from users;";
            pool.query(query, function (error, result, fields) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        })
    },  
    getUserById: (userId) => {
        return new Promise((resolve, reject) => {
            let params = [];

            if (userId) {
                params.push(userId);
            }
            
            let query = "SELECT * FROM users where user_id = $1";

            pool.query(query, params, function (error, result, fields) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        })  
    }
}