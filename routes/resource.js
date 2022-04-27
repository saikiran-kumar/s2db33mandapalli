var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var grocery_controller = require('../controllers/grocery');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/grocery', grocery_controller.grocery_create_post);
// DELETE request to delete Costume.
router.delete('/grocery/:id', grocery_controller.grocery_delete);
// PUT request to update Costume.
router.put('/grocery/:id',grocery_controller.grocery_update_put);
// GET request for one Costume.
router.get('/grocery/:id', grocery_controller.grocery_detail);
// GET request for list of all Costume items.
router.get('/grocery', grocery_controller.grocery_list);
module.exports = router;