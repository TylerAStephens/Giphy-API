console.log("connected");
   var movies = ["The Shining", "Star Wars", "Young Frankenstein", "Fight Club"];
   
     
     function renderButtons() {
 
         $("#buttons-view").empty();
   
           for (var i = 0; i < movies.length; i++) {
   
             var a = $("<button>");
             a.addClass("movie");
             a.attr("data-name", movies[i]);
             a.text(movies[i]);
             $("#buttons-view").append(a);
           }
         }
   
         $("#add-movie").on("click", function(event) {
           event.preventDefault();
           var movie = $("#movie-input").val().trim();
   
           movies.push(movie);
   
           renderButtons();
   
         });
   
   
    $(document).on("click", ".movie", function() {
             
       var title = $(this).attr("data-name");
       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
         title + "&api_key=ye1R33OaJi33143Kt6AyfUkUvltBmMHd";
   
       $.ajax({
           url: queryURL,
           method: "GET"
         })
         .done(function(response) {
           var results = response.data;
   
           for (var i = 0; i < results.length; i++) {
             var gifDiv = $("<div class='item'>");
   
             var rating = results[i].rating;
   
             var p = $("<p>").text("Rating: " + rating);
   
             var titleImage = $("<img>");
             titleImage.attr("src", results[i].images.fixed_height.url);
   
             gifDiv.prepend(p);
             gifDiv.prepend(titleImage);
   
             $("#gifs-appear-here").prepend(gifDiv);
             
           }
         });
         
     });
         renderButtons();
   