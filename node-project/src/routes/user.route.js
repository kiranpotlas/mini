const router = require('express').Router();
const userCtrl = require('../controllers/users.controller')
const authCtrl = require('../controllers/auth.controller')

router.route('/users')
.get(userCtrl.getUsers)
.post(userCtrl.addUsers);

router.route('/user')
.post(userCtrl.addUser);

router.route('/users/:userId')
.get(userCtrl.getUser)
.put(userCtrl.updateUser)
.delete(userCtrl.deleteUser);

router.route('/register')
.post(authCtrl.registerUser);

router.route('/login')
.post(authCtrl.loginUser);
// Note : Always write param based url after
// normal url if base url is same

module.exports = router;