// server routes

// First at the top of your routes.js file you'll have to require the controller
var customers = require("./../controllers/customers.js");

// This is our routes.js file located in /config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it a
module.exports = function(app) {

    app.get("/", function(req, res) {
        console.log("mongooes.js")
        res.render("index");
    });

    // customers are displayed on a customers page
    // AND index page
    app.get("/customersObjects", function(req, res) {
        // "customers" references the
        // "customers.js" controller and
        // "show" is a method of said
        // "customers.js" controller
        customers.show(req, res);
    });


    app.post("/save", function(req, res) {
        customers.saveCustomer(req, res);
    });

    app.get("/destroy/:id", function(req, res) {
        customers.deleteCustomer(req, res);
    });

};