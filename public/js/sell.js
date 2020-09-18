$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/album_data").then(data => {
        console.log(data)
        let artist = data.albums.items[0].artists[0].name;
        let release = data.albums.items[0].release_date
        let albumName = data.albums.items[0].name
        let albumCoverM = data.albums.items[0].images[1].url
        let url = 'https://open.spotify.com/artist/' + data.albums.items[0].artists[0].id

        $(".hello").text(artist);


    });
    // let album = ;
    // $.ajax({
    //     url: "/api/album_data",
    //     data: album
    // })
});