const express = require('express')
const router = express.Router();
const {getAllProducts, getProductById} = require('../controller/productControllers')
/**
 * GET all products from db
 */
// router.get('/', (req, res) => {
//     res.send('Hello World!')
// });
router.get('/', getAllProducts);

/**
 * GET aproduct by id from db
 */
//  router.get('/:id', (req, res) => {
//     res.send('Hello World!')
// });
router.get('/:id', getProductById);
module.exports = router