// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const sales = require("../models/sales");
//const Album = require('../models/album');

module.exports = function(app) {

    app.get('/', (req, res) => {
        // res.json(path.join(__dirname, "index"));


        res.render('index');
    });

    app.get('/sell', (req, res) => {
        res.render('sell');
    });
    app.get('/buy', (req, res) => {
        res.render('buy');
    });
    app.get('/login', (req, res) => {
        res.render('login');
    });
};
// app.get("/signup", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//         res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
// });


// app.get("/members", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
// });

// app.get("/signup", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//         res.redirect("/sell");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
// });



// app.get('/buy', (req, res) => {
//     /* Album.buyAlbum(albums => {
//       res.render('/buy', {
//         albums: albums
//       })
//     })*/
//     //conection.query().then(data => res.render('/buy', {album: data}))
//     res.render('buy', {
//         albums: [{ 'artist': 'artist' }]
//     });
// });


}

