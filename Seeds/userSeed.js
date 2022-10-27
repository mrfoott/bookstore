const db = require('../connectionDB');

const userSeed = {
    addUsers: (req, res)=> {
        const sql = `SELECT * FROM users;`
        return db.query(sql, (err, result)=> {
            if(err) console.log(err + " error");
            res.status(200).json(result);
        })
    }
}

module.exports = userSeed