$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $(".searchBtn").on("click", function(event) {
        event.preventDefault();
        let searchName = $(".input").val()
        $.get("/api/album_data/" + searchName).then(data => {
            console.log(data)
                //data.albums.items.forEach(element => console.log(element))
            let artist = data.albums.items[0].artists[0].name;
            let release = data.albums.items[0].release_date
            let albumName = data.albums.items[0].name
            let albumCoverM = data.albums.items[0].images[1].url
            let url = 'https://open.spotify.com/artist/' + data.albums.items[0].artists[0].id
            $(".hello").text(artist);
        });
    });

    // let album = ;
    // $.ajax({
    //     url: "/api/album_data",
    //     data: album
    // })
});