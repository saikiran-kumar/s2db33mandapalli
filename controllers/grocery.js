var Grocery = require('../models/grocery');
// List of all Costumes
exports.grocery_list = function(req, res) {
 res.send('NOT IMPLEMENTED: grocery list');
};
// for a specific Costume.
exports.grocery_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: grocery detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.grocery_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: grocery create POST');
};
// Handle Costume delete form on DELETE.
exports.grocery_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: grocery delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.grocery_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: grocery update PUT' + req.params.id);
};

exports.grocery_list = async function(req, res) {
    try{
    thegrocery = await Grocery.find();
    res.send(thegrocery);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   exports.grocery_view_all_Page = async function(req, res) {
    try{
    thegrocery = await Grocery.find();
    res.render('grocery', { title: 'grocery Search Results', results: thegrocery });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   