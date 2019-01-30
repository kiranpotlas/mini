const router=require('express').Router();
const homeCtrl=require('../controllers/home.controller');
// const path=require('path')
router
.route("/")
.get(homeCtrl.root)
router
.route("/home")
.get(homeCtrl.home)
module.exports=router;