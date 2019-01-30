const router=require('express').Router();
const userCtrl=require('../controllers/user.controller');
const bodyParser=require('body-parser');

router
.route('/users')
.get(userCtrl.getUsers)
.post(userCtrl.addUser);

router
.route('/users/:userId')
.get(userCtrl.getUsers)
.post(userCtrl.addUser)
.put(userCtrl.updateUsers)
.patch(userCtrl.minorUpdates)
.delete(userCtrl.deleteUser);
module.exports=router;