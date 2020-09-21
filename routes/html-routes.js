// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {

    app.get('/signup', (req, res) => {
        res.render('signup');
    });
    app.get('/login', (req, res) => {
        res.render('login');
    });
    app.get('/signup', (req, res) => {
        res.render('signup');
    });

    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.render("index");
        }
        res.render("login");
    });

    app.get("/sell", isAuthenticated, function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.render("sell");
        }
        res.render("login");
    });
    app.get("/buy", isAuthenticated, function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            return res.render("buy");
        }
        res.render("login");
    });

};