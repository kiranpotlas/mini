const router = require('express').Router();
const userCtrl = require('../controllers/users.controller')

router.route('/users')
.get(userCtrl.getUsers)
.post(userCtrl.addUser);

router.route('/users/:userId')
.get(userCtrl.getUser)
.put(userCtrl.updateUser)
.delete(userCtrl.deleteUser);

// Note : Always write param based url after
// normal url if base url is same

module.exports = router;