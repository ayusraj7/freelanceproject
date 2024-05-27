const express = require('express');
const router = express.Router();
const {auth,isStudent}=require('../middleware/authorization')
const {getItems,getParticularItem}=require('../controller/Student')

router.get('/items',getItems);
router.get('/items/:id',getParticularItem);

module.exports=router;