
$( document ).ready(function() {
//set initial array of gifs
var gifs = ["the thing", "nightmare on elm street", "the fly", "evil dead 2", "gremlin", "creepshow"];
//make button function


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
//save search value as variable

//push search to array


$("#add-gifs").on("click", function(event) {
    event.preventDefault();
    var newGif = $("#new-gifs").val().trim();
    gifs.push(newGif);
    renderButton();
});


    renderButton();
});


 

