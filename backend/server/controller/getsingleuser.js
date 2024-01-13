const userRouter = require('../routes/Routes');
const axios = require('axios');
const express = require('express');
const conn = require("../db/conn")
const router = new express.Router();

exports.singleuserget = async (req, res) => {
    let obj = {}
      const userId = req.params.id;
      let query = `select * from userdata where id = ?`
    
      conn.query(query, userId, (err, result, fields) => {
    
        if (err) {
           obj. massage= 'Database query error',
            obj.success= false,
          res.json(obj)
        } else {
            if(result.length > 0){
                obj. massage= 'found data successfully',
                obj.success= true,
                obj.data = result
                res.json(obj)
            }else{
                obj. massage= 'no data found for this id',
                obj.success= false, 
                res.json(obj) 
            }
          
        }
      })
    }