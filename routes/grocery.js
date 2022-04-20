var express = require('express');
const grocery_controlers= require('../controllers/grocery');
var router = express.Router();
/* GET costumes */
router.get('/', grocery_controlers.grocery_view_all_Page );
/* GET detail costume page */
router.get('/detail', grocery_controlers.grocery_view_one_Page);
/* GET create costume page */
router.get('/create', grocery_controlers.grocery_create_Page);
/* GET create update page */
router.get('/update', grocery_controlers.grocery_update_Page);
/* GET delete costume page */
router.get('/delete', grocery_controlers.grocery_delete_Page);
module.exports = router;
