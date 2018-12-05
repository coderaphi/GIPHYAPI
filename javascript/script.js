
function createButtons() {

var movieArray = [];



for (var i =0 ;  i<movieArray.length; i++){

var buttonCreate =  $("<button>");    
   
buttonCreate.addClass("MovieTitle");
buttonCreate.attr("data-name", movieArray[i]);
buttonCreate.text(movieArray[i]);
$(".container").append(buttonCreate);


}

}


var movieArray = [];


$("#add-movie").on("click",function(event){
 event.preventDefault(); 
   
    var movieName =  $("#name-input").val().trim()
    movieArray.push(movieName)
    createButtons() 
    console.log(movieArray)
   
   });

   createButtons() 
