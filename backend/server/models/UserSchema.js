// const mysql2 = require("mysql2");
// const validatior = require("validator")
// const userSchema = new mysql2.Schema({
//     Name:{
//         type:'string',
//         required:true,
//         trim:true
//     },
//     Dob:{
//         type:'string',
//         required:true,
//         trim:true
//     },
//     Gender:{
//         type:'string',
//         required:true,
//         trim:true
//     },
//     Contact:{
//         type:'string',
//         required:true,
//         trim:true,
//         minlength:10,
//         maxlength:10
//     },
//     Location:{
//         type:'string',
//         required:true,
//         trim:true
//     },
//     Email:{
//         type:'string',
//         required:true,
//         trim:true,
//         validate(value){
//             if(!validatior.isEmail(value)){
//                 throw Error("this email is not valid")
//             }
//         }
//     },
//     datecreated:Date,
//     dateupdated:Date
// })
// // model
// const users = new mysql2.model("userdata.userShcema")

// module.exports = users








