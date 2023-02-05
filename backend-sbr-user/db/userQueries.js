const pool = require('../db/pool.js');

getUsers: () => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * from users";
        pool.query(query, function (error, result, fields) {

            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    })
}