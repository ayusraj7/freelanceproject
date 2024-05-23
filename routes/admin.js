const express = require('express');
const router = express.Router();

const {auth,isAdmin}=require('../middleware/authorization')
const {createItem,uploadPhoto}=require('../controller/Admin');
const{login}=require('../controller/Auth')
//user get the items

router.post('/createItem',auth,isAdmin,createItem);
router.post('/uploadPhoto',auth,isAdmin,uploadPhoto);


module.exports=router;