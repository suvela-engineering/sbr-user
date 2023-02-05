const pool = require('../pool.env');

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {   
            let query = "SELECT * FROM users";
            //query += "USER_FIRSTNAME, USER_LASTNAME, USER_BIRTH, USER_EMAIL, USER_PHONE, ";
            //query += "USER_DESCRIPTION,CREATED_BY, MODIFIED_BY ";
            //query += "FROM users";
            pool.query(query, function (error, result, fields) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
                pool.end();
            });
        })
    }
}