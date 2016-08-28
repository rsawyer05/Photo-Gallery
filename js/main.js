var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $btnPrev = $('<button id="btnPrev"> < </button>');
var $btnNext = $('<button id="btnNext"> > </button>')
var $btnExit = $('<button id="btnExit"> x </button>')
//Add image to overlay
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);
//Add left button to overlay
$overlay.append($btnPrev);
//Add right button to overlay
$overlay.append($btnNext);
//Add exit button to overlay
$overlay.append($btnExit);
//Add overlay to body
$("body").append($overlay);

//Prevent Default and capture image to show
$("#imageGallery div.image-wrapper").on("click", function(event){
  event.preventDefault();
  var imageLocation = $(this).find("a").attr("href");
  //Show image on overlay
  $image.attr("src", imageLocation);
  //Remove class active from previous active item
  $("#imageGallery div.active").removeClass("active");
  //Adds active class to active image
  $(this).addClass("active");
  //Show the overlay
  $overlay.show();
  //Finding caption for clicked image
  var $captionLocation = $(this).find("p.caption").text();
  //Dispalays caption under image
  $caption.text($captionLocation);



});

//When x is clicked
$btnExit.on("click", function(){
  //Hide the overlay
  $overlay.hide();
  //Remove class "active"
  $("#imageGallery a.active").removeClass("active");

});


$("#overlay").on("keydown", function(event){

    //Left
  if(event.which == "37") {
      navigate(-1);
      console.log(event.which);
    //Right
  } else if(event.which == "39") {
      navigate(1);
      console.log(event.which);
  }

});

//Click based navigation
$btnPrev.on("click", function(){
  navigate(-1);
});

$btnNext.on("click", function(){
  navigate(1);
});


function navigate(direction){
  if(direction == -1) {  // left
    $("#imageGallery div.active").prev().find(".image a").trigger("click");
  } else if (direction == 1) {  //right
    $("#imageGallery div.active").next().find(".image a").trigger("click");
  }
}
