$(document).ready(() => {

    $("#searchBtnDB").on("click", function(event) {
        event.preventDefault();
        const albumInfo = document.querySelector("#album-container");
        albumInfo.style.visibility = "visible";
        let searchName = $(".input").val()
        $.get("/api/dbSearch/" + searchName).then(albumResponse => {
            let artist = albumResponse.artist
            let release = albumResponse.releaseDate
            let albumName = albumResponse.albumName
            let albumCoverM = albumResponse.albumCoverM
            let genres = albumResponse.genres
            let price = albumResponse.price
            $("#albumCoverM").attr("src", albumCoverM);
            $("#albumName").text(albumName);
            $("#artist").text(artist);
            $("#releaseDate").text(release);
            $("#genres").text(genres);
            $("#price").text('$' + price)

        });
    })
});