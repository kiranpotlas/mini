const router = require('express').Router();
const proCtrl = require('../controllers/product.controller')

router.route('/products')
.get(proCtrl.getProducts)
.post(proCtrl.addProduct);

router.route('/product/:userId')
.get(proCtrl.getProduct)
.put(proCtrl.addProduct)
.patch(proCtrl.updateProduct)
.delete(proCtrl.deleteProduct);

// Note : Always write param based url after
// normal url if base url is same

module.exports = router;