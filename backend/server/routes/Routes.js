

const express = require('express');
const router = new express.Router();
const  controller = require("../controller/userscontroller");
const getsingleuser = require("../controller/getsingleuser");
const updateuser = require("../controller/updateuser")
const deletteuser = require("../controller/deletuser")


//routes

//create endpoint api
router.post("/users/fillform",controller.userpost);
router.get("/users/Details",controller.usersget);
router.get("/users/Details/:id",getsingleuser.singleuserget)
router.patch("/users/Edituser/:id",updateuser.updateuserdata)
router.delete("/users/deleteuser/:id",deletteuser.deleteuserdata)









module.exports=router