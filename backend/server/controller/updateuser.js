const userRouter = require('../routes/Routes');
const axios = require('axios');
const express = require('express');
const conn = require("../db/conn")
const router = new express.Router();

exports.updateuserdata = async (req, res) => {
    let obj = {}
    const userId = req.params.id
 
    const { Name, Dob, Gender, Contact, Location, Email } = req.body;
   
   let query = `UPDATE userdata SET Name=?, Dob=?, Gender=?, Contact=?, Location=?, Email=? WHERE id = ?`
    conn.query(query, [Name, Dob, Gender, Contact, Location, Email, userId], (err, result) => {
        if (err) {

            obj.message = 'database query error', err,
                obj.success = false,
                res.json(obj)
        } else {
            if (result.affectedRows === 0) {
                obj.message = 'data found for this id'
                res.json(obj)
            } else {
                obj.message = ' no data found for this id'
            }
            obj.message = 'user data updated successfully',
                obj.success = true,
                obj.data = result,
                res.json(obj)
        }
    })
}