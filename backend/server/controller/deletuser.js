const userRouter = require('../routes/Routes');
const axios = require('axios');
const express = require('express');
const conn = require("../db/conn")
const router = new express.Router();

exports.deleteuserdata= async(req, res)=>{
let obj = {}
const userId = req.params.id

let query  = `DELETE from userdata where id = ?`;
conn.query(query,userId,(err,result)=>{
    if(err){
        obj.message = 'database query error',err,
            obj.success = false,
            res.json(obj)
    }else{
        if(result.affectedRows > 0){
            obj.message = 'data found for this id'
           
        }else{
            obj.message = ' no data found for this id'
        }
        obj.message = 'user data deleted successfully',
        obj.success = true,
        obj.data = result,
        res.json(obj)
    }
})
}