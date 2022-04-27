var express = require('express');
const grocery_controlers= require('../controllers/grocery');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET costumes */
router.get('/', grocery_controlers.grocery_view_all_Page );
/* GET detail costume page */
router.get('/detail', grocery_controlers.grocery_view_one_Page);
/* GET create costume page */
router.get('/create',secured, grocery_controlers.grocery_create_Page);
/* GET create update page */
router.get('/update',secured, grocery_controlers.grocery_update_Page);
/* GET delete costume page */
router.get('/delete',secured, grocery_controlers.grocery_delete_Page);
module.exports = router;
