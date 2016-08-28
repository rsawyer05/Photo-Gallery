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
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Show image on overlay
  $image.attr("src", imageLocation);
  //Show the overlay
  $overlay.show();
  //Finding caption for clicked image
  var $captionLocation = $(this).find("p.caption").text();
  //Dispalays caption under image
  $caption.text($captionLocation);


});

//When overlay is clicked
$btnExit.click(function(){
  //Hide the overlay
  $overlay.hide();

});
