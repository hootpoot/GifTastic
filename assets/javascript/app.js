$(document).ready(function () {

    var gifs = ["the thing", "nightmare on elm street", "the fly", "evil dead 2", "gremlins", "creepshow"];

    function renderButton() {
        $("#buttons-here").empty();

        for (var i = 0; i < gifs.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-danger gif-button");
            button.attr("data-name", gifs[i]);
            button.text(gifs[i]);
            $("#buttons-here").append(button);
        }

    }


    $("#buttons-here").on("click", ".gif-button", function () {

        var gifQ = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gifQ + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            })

            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");

                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var gifImage = $("<img>");

                    gifImage.attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-state", "still");
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    //gifImage.attr("src", results[i].images.fixed_height.url);
                    gifImage.addClass("gifResult");

                    gifDiv.append(gifImage);
                    gifDiv.append(p);

                    $("#gifs-here").prepend(gifDiv);

                }


                $("#gifs-here").on("click", ".gifResult", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        var url = $(this).attr("data-animate");
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });


    });

    $("#add-gifs").on("click", function (event) {
        event.preventDefault();
        var newGif = $("#new-gifs").val().trim();
        gifs.push(newGif);
        renderButton();



    });



    renderButton();
    //push search to array

});