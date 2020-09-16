//testing out node spotify api

let Spotify = require('node-spotify-api');

let spotify = new Spotify({
    id: '12e1a356003a4885b03ca37e142d8a75',
    secret: 'aab284a311694e6a885d6c63436eb8f0'
});

spotify
    .search({ type: 'album', query: 'Too low for zero' })
    .then(function(response) {
        // console.log(response.albums.items[0].images[0])
        // console.log(response.albums.items.artists)
        let artist = response.albums.items[0].artists[0].name
        let release = response.albums.items[0].release_date
        let albumName = response.albums.items[0].name
        let albumCoverL = response.albums.items[0].images[0].url
        let albumCoverM = response.albums.items[0].images[1].url
        let albumCovers = response.albums.items[0].images[2].url
        let url = 'https://open.spotify.com/artist/' + response.albums.items[0].artists[0].id
        spotify
            .search({ type: 'artist', query: artist })
            .then(function(response) {
                let genres = response.artists.items[0].genres
                console.log(response);
                console.log(response.artists)
                console.log(response.artists.items[0])
                console.log("Album Name: " + albumName)
                console.log("Album cover URL: " + albumCoverL)
                console.log("Artist Name: " + artist)
                console.log("Release date: " + release)
                console.log("Spotify page: " + url)
                console.log("Genres : " + genres)
            })
            .catch(function(err) {
                console.log(err);
            });

    })
    .catch(function(err) {
        console.log(err);
    });