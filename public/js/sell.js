$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        let searchName = $(".input").val()
        $.get("/api/album_data/" + searchName).then(data => {
            let artist = data.albumData.albums.items[0].artists[0].name;
            let release = data.albumData.albums.items[0].release_date
            let albumName = data.albumData.albums.items[0].name
            let albumCoverM = data.albumData.albums.items[0].images[1].url
            let genres = data.artistData.artists.items[0].genres
            $("#albumCoverM").attr("src", albumCoverM);
            $("#albumName").text(albumName);
            $("#artist").text(artist);
            $("#releaseDate").text(release);
            $("#genres").text(genres);
        });
    });

    $("#sellBtn").on("click", function(event) {
        event.preventDefault();
        let albumObj = {
            albumName: $("#albumName").text(),
            albumCoverM: $("#albumCoverM").attr("src"),
            artist: $("#artist").text(),
            releaseDate: $("#releaseDate").text(),
            genres: $("#genres").text(),
            price: $("#price").val()
        }

        $.ajax("/api/album_data", {
            type: "POST",
            data: albumObj
        }).then(function() {
            console.log("Album added to DB");
        })

    });

});