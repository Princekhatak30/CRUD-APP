const mysql = require("mysql2");


const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mycrudapp"
});
// conn.connect((err)=>{
//     if(err){
//         console.log('error failed to conncect with mysql',err);
//     }
//     else{
//         console.log(' database connected successfully');
//     }
// })
module.exports= conn
