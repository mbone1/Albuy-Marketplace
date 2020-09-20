$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $(".searchBtn").on("click", function (event) {
        event.preventDefault(); 
        const albumInfo = document.querySelector("#album_info");  
        albumInfo.style.visibility = "visible"; 
        let searchName = $(".input").val()
        $.get("/api/album_data/" + searchName)
            .then(data => {
                console.log(data)
                data.albums.items.forEach(element => console.log(element))
                let artist = data.albums.items[0].artists[0].name;
                let release = data.albums.items[0].release_date 
                let date = moment(release).format('MM/DD/YYYY'); 
                console.log(date);
                let albumName = data.albums.items[0].name
                let albumCoverM = data.albums.items[0].images[1].url
                let url = 'https://open.spotify.com/artist/' + data.albums.items[0].artists[0].id
                $("#album").text(albumName);
                $("#artist").text(artist);
                $("#release").text(date);
                $("#spotify").text(url); 
                $("#spotify").on("click", function redirect(r) { 
                    r.preventDefault(); 
                    location.href = url;
                }); 
                // $("#albumPic").prepend(albumCoverM); 
                // $(`img src='${albumCoverM}'>`).appendTo('#albumPic'); 
                $('#albumPic').append(`<img src='${albumCoverM}'>`);  

                
                
            }); 
            // function redirect(r) {  
            //     r.preventDefault();
            //     location.href= (url);
            // }; 

            
        }); 

        $("#sellBtn").on("click", function (sell) { 
          const form = document.querySelector("#form"); 
           form.style.visibility = "visible" 
        }); 

        $("#submitBtn").on("click", function (submit) {  
            submit.preventDefault();
            const sellValue = $("#inlineFormInputName2").val(); 
            console.log(sellValue); 
            const sellBtn = document.querySelector("#sellBtn"); 
            sellBtn.style.visibility = "hidden"; 
            form.style.visibility = "hidden";  
            //$("<div/>").text(sellValue).appendTo("div#album_info");  
            const priceDiv = $("<div class=price>"); 
            priceDiv.text("Price:" + " " + "$" + sellValue).appendTo("div#album_info");  
            

        })
        
    


    // let album = ;
    // $.ajax({
    //     url: "/api/album_data",
    //     data: album
    // })


});