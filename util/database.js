const mysql =require('mysql2');

const pool= mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'mod@1999'
});

module.exports = pool.promise();