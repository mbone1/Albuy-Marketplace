// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
let Spotify = require("node-spotify-api");
let spotify = new Spotify({
    id: "12e1a356003a4885b03ca37e142d8a75",
    secret: "aab284a311694e6a885d6c63436eb8f0",
});

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id,
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        db.User.create({
                email: req.body.email,
                password: req.body.password,
            })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    //     function searchAlbum() { return spotify.search({ type: 'album', query: req.params.albumSearch }) }

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
                id: req.user.id,
            });
        }
    });


    app.get("/api/album_data/:albumSearch", async function(req, res) {
        let responseData = {
            albumData: {},
            artistData: {},
        };
        let albumResponse = await searchAlbum();
        let artistResponse = await searchArtist(albumResponse);

        function searchAlbum() { return spotify.search({ type: 'album', query: req.params.albumSearch }) }

        function searchArtist(albumResponse) { return spotify.search({ type: 'artist', query: albumResponse.albums.items[0].artists[0].name }) }
        responseData.albumData = albumResponse;
        responseData.artistData = artistResponse;
        res.json(responseData);
    });

    app.post("/api/album_data", (req, res) => {
        db.ForSale.create({
                albumName: req.body.albumName,
                albumCoverM: req.body.albumCoverM,
                artist: req.body.artist,
                releaseDate: req.body.releaseDate,
                genres: req.body.genres,
                price: req.body.price
            })
            .then(() => {
                res.json("Item placed for sale!")
                console.log("Item put up for sale!");
            })
            .catch((err) => {
                console.log(err)
                res.status(401).json(err);
            });
    });

    app.get("/api/dbSearch/:albumSearch", async function(req, res) {
        // console.log(req)

        const returnObj = await db.ForSale.findOne({
            where: {
                albumName: req.params.albumSearch
            }
        })
        console.log(returnObj)
        res.json(returnObj)







    })
}