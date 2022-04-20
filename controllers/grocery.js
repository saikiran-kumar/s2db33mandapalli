var Grocery = require('../models/grocery');
// List of all Costumes
exports.grocery_list = function(req, res) {
 res.send('NOT IMPLEMENTED: grocery list');
};
// for a specific Costume.
// for a specific Costume.
exports.grocery_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Grocery.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Costume create on POST.

// Handle Costume create on POST.
exports.grocery_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Grocery();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.quantity = req.body.quantity;
    document.price = req.body.price;
    
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Costume delete form on DELETE.
// Handle Costume delete on DELETE.
exports.grocery_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Grocery.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Costume update form on PUT.
// Handle Costume update form on PUT.
exports.grocery_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Grocery.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)
 toUpdate.name = req.body.name;
 if(req.body.price) toUpdate.cost = req.body.price;
 if(req.body.quantity) toUpdate.size = req.body.quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
   
   // Handle a show one view with id specified by query
exports.grocery_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Grocery.findById( req.query.id)
    res.render('grocerydetail',
   { title: 'Grocery Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.grocery_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('grocerycreate', { title: 'Grocery Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a costume.
// query provides the id
exports.grocery_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Grocery.findById(req.query.id)
    res.render('groceryupdate', { title: 'Grocery Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.grocery_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Grocery.findById(req.query.id)
    res.render('grocerydelete', { title: 'Grocery Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };