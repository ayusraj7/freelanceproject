const express = require('express');
const router = express.Router();
const {auth,isStudent}=require('../middleware/authorization')
const {getItems,getParticularItem}=require('../controller/Student')

router.get('/items',auth,isStudent,getItems);
router.get('/items/:id',auth,isStudent,getParticularItem);

module.exports=router;