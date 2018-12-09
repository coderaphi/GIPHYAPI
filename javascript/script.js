var cartoonArray = ["Tarzan", "Simspons", "Felix", "Flinstones", "Top Cat", " Dragon Ball Z", "G.I. Joe ", "DuckTales ", "The Transformers ", "Teenage Mutant Ninja Turtles", "X-Men", "Scooby Doo", "Jetsons", "Batman", "Superman", "Captain Planet", "Jem", "Mickey Mouse", "Barney", "Spider Man", "Barbie"];

function createButtons() {
   
   $("#cartoon-view").empty();

   for (var i = 0; i < cartoonArray.length; i++) {

      var movieName = cartoonArray[i];

      var buttonCreate = $(
         '<button/>',
         {
            class: "cartoonTitle",
            'data-name': movieName,
            click: alertMovieName
         }
      );

      buttonCreate.text(movieName);
   
      $("#cartoon-view").append(buttonCreate);

   }

}

$("#add-movie").on("click", function (event) {
   event.preventDefault();

   var movieName = $("#name-input").val().trim();
   cartoonArray.push(movieName);
   createButtons();
   

});

$( document ).ready(function() {
   createButtons();
});


function alertMovieName() {

   $('.images').empty();

   var cartoonTitle = $(this).attr("data-name");

  

   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonTitle + "&api_key=ATpprVj7uGgGK70HvBM2dy0BGO6h9tNn&limit=8";

   console.log(queryURL);

   $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function (response) {

      var dataResults = response.data;

      for (var i = 0; i < dataResults.length; i++) {

         var imgData = dataResults[i];

         var displayGif = $(
            "<img/>",
            {
               src: imgData.images.original_still.url,
               width: 300,
               height: 250,
               'data-play-url': imgData.images.original.url,
               click: function() {
                  var playUrl = $(this).attr("data-play-url");
                  var currentSrc = $(this).attr("src");
                  $(this).attr('src', playUrl);
                  $(this).attr('data-play-url', currentSrc);
               }
            }
         );


         $(".images").prepend(displayGif);

      }

   });
};
