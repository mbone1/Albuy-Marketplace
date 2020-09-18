// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
let Spotify = require('node-spotify-api');
let spotify = new Spotify({
    id: '12e1a356003a4885b03ca37e142d8a75',
    secret: 'aab284a311694e6a885d6c63436eb8f0'
});


module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        db.User.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }

    });

    // let album = req.body.album;

    app.get("/api/album_data", async function(req, res) {
            albumResponse = await spotify.search({ type: 'album', query: 'Dark side of the moon' })
            res.json(albumResponse)
        })
        // let responseData = {
        //   albumData: {},
        //   artistData: {}
        // }
        // let albumResponse = await searchAlbum;
        // let artistResponse = await searchArtist;
        // async function searchAlbum() {}
        // async function searchArtist() {}

    // responseData.albumData = albumResponse;
    // responseData.artistData = artistResponse;

    // res.json(responseData);

    // spotify
    //     .search({ type: 'album', query: 'Dark side of the moon' })
    //     .then(function(albumResponse) {
    //         let artist = albumResponse.albums.items[0].artists[0].name
    //         let release = albumResponse.albums.items[0].release_date
    //         let albumName = albumResponse.albums.items[0].name
    //         let albumCoverM = albumResponse.albums.items[0].images[1].url
    //         let url = 'https://open.spotify.com/artist/' + albumResponse.albums.items[0].artists[0].id
    //         albumData = albumResponse;
    //         spotify
    //             .search({ type: 'artist', query: artist })
    //             .then(function(artistResponse) {
    //                 let genres = artistResponse.artists.items[0].genres
    //                 console.log("Album Name: " + albumName)
    //                 console.log("Album cover URL: " + albumCoverM)
    //                 console.log("Artist Name: " + artist)
    //                 console.log("Release date: " + release)
    //                 console.log("Spotify page: " + url)
    //                 console.log("Genres : " + genres)
    //                 artistData = artistResponse;
    //             }).then(function() {
    //                 res.json(responseData)
    //             })
    //             .catch(function(err) {
    //                 console.log(err);
    //             });

    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });

    // console.log(req)




};