$(document).ready(() => {

    $("#searchBtnDB").on("click", function(event) {
        event.preventDefault();
        const albumInfo = document.querySelector("#album-container");
        albumInfo.style.visibility = "visible";
        let searchName = $(".input").val()
        $.get("/api/dbSearch/" + searchName).then(data => {
            let artist = data.artist
            let release = data.releaseDate
            let albumName = data.albumName
            let albumCoverM = data.albumCoverM
            let genres = data.genres
            let price = data.price
            $("#albumCoverM").attr("src", albumCoverM);
            $("#albumName").text(albumName);
            $("#artist").text(artist);
            $("#releaseDate").text(release);
            $("#genres").text(genres);
            $("#price").text('$' + price)

        });
    })
});