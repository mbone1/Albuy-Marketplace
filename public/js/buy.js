$(document).ready(() => {

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        let searchName = $(".input").val()
        $.get("/api/album_buy/" + searchName).then(data => {
            let artist = asdf
            let release = asdf
            let albumName = asdf
            let albumCoverM = asdf
            let genres = asdf
            $("#albumCoverM").attr("src", albumCoverM);
            $("#albumName").text(albumName);
            $("#artist").text(artist);
            $("#releaseDate").text(release);
            $("#genres").text(genres);


        });
    })
});