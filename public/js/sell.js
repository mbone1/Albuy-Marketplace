$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $(".searchBtn").on("click", function(event) {
        event.preventDefault();
        let searchName = $("#input").val()
        $.get("/api/album_data/" + searchName).then(data => {
            console.log(data)
                //data.albums.items.forEach(element => console.log(element))

            let artist = data.albums.items[0].artists[0].name;
            let release = data.albums.items[0].release_date
            let albumName = data.albums.items[0].name
            let albumCoverM = data.albums.items[0].images[1].url
            let url = 'https://open.spotify.com/artist/' + data.albums.items[0].artists[0].id
            $("#albumCoverM").attr("src", albumCoverM);
            $("#albumName").text(albumName);
            $("#artist").text(artist);
            $("#releaseDate").text(release);
            $("#url").attr("href", url);
            console.log(artist)
        });
    });

    $(".sellBtn").on("click", function(event) {
            event.preventDefault();
            let newAlbum = {
                artist: $("#").text(),
                releasedate: $("#").text(),
                albumName: $("#").text(),
                albumCoverM: $("#").text(),
                url: $("#").text(),
                price: $("#").text()
            }

            console.log(newAlbum)

            $.ajax("/api/album_data", {
                type: "POST",
                data: newAlbum
            }).then(function() {
                console.log("Album added to DB");
            })
        }

    );
})








// let album = ;
// $.ajax({
//     url: "/api/album_data",
//     data: album
// })