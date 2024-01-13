// const users = require("../models/UserSchema")
const userRouter = require('../routes/Routes');
const axios = require('axios');
const express = require('express');
const conn = require("../db/conn")
const router = new express.Router();



exports.userpost = async (req, res) => {
  const { Name, Dob, Gender, Contact, Location, Email } = req.body;
  // conn.query("SELECT * FROM usersdata WHERE id = ?", Email, (err, result) => {
  // let result = conn.query(query,[])
  // console.log(result);
  // })

  let obj = {}
  //for insert data in db

  const insertQuery = 'insert into userdata(Name,Dob,Gender,Contact,Location,Email) value(?,?,?,?,?,?)'
  if (!Name || !Dob || !Gender || !Contact || !Location || !Email) {
    obj.massage = 'All filleds are required'
    obj.success = false
    return res.json(obj)
  }

  conn.query(insertQuery, [Name, Dob, Gender, Contact, Location, Email], (err, result) => {
    if (err) {
      obj.massage = 'Database query error'
      obj.success = false
      console.log("Database query error", err.message);
      return res.json(obj);
    }
    obj.massage = 'Data added successfully'
    obj.success = true
    res.json(obj)

  })

}
// get userdata
exports.usersget = async (req, res) => {
  let obj = {}
  const search = req.query.search || ""
 console.log(search);
  let query = `select * from userdata where Name like ?;`

  conn.query(query, [`%${search}%`], (err, result) => {

    if (err) {
      obj.message = 'Database query error'
      obj.success = false
      res.json(obj)
    }
    obj.message = 'data find successfully'
    if (err) throw err;
    obj.data = result
    obj.success = true
    res.json(obj)

  });

}



