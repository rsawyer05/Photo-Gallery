var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $iframe = $('<iframe id="iframe" allowfullscreen frameborder="0"></iframe>')
var $caption = $("<p></p>");
var $btnPrev = $('<button id="btnPrev" type="button"> < </button>');
var $btnNext = $('<button id="btnNext" type="button"> > </button>');
var $btnExit = $('<button id="btnExit" type="button"> x </button>');
//Add image to overlay
$overlay.append($image);
//Add iframe to overlay
$overlay.append($iframe);
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
$("div.image-wrapper").on("click", function(event){
  event.preventDefault();

  var $imageLocation = $(this).find("a").attr("href");

  var $imageType = $(this).find("a").attr("class");

  //Remove class active from previous active item
  $("div.active").removeClass("active");
  //Adds active class to active image
  $(this).addClass("active");
  //iframe display
  if($imageType == "video"){
    $iframe.attr("src", $imageLocation);
    $iframe.show();
    $image.hide();

    //image display
  } else if($imageType == "image"){
    $image.attr("src", $imageLocation);
    $image.show();
    $iframe.hide();

  }

  //Caption display
  var $captionLocation = $(this).find(".caption").text();
  $caption.text($captionLocation);

  //Show the overlay
  $overlay.delay(200).fadeIn(400);

});

//Keyboard arrow key navigation
$(document).on("keydown", function(event) {
  //Conditional for arrow keys to only work when the overlay is displayed
  if($("#overlay").css("display") !== 'none') {
    //Left
    if(event.which == "37") {
        navigate(-1);
      //Right
    } else if(event.which == "39") {
        navigate(1);
    }
  }

});

//When x is clicked
$btnExit.on("click", function(){
  //Hide the overlay
  $overlay.delay(200).fadeOut(400);
  //Remove class "active"
  $("div.active").removeClass("active");

});

//Click based navigation
//Left
$btnPrev.on("click", function(){
  navigate(-1);

});
//Right
$btnNext.on("click", function(){
  navigate(1);

});

//Navigation Magic .prev and .next
function navigate(direction){
  if(direction == -1) {  // left
    $("div.active").prev(".image-wrapper").find("a").trigger("click");

  } else if (direction == 1) {  //right
    $("div.active").next(".image-wrapper").find("a").trigger("click");
    }
}

//Search box filter
$("#searchbox").on("keyup", function() {

  var $filter = $(this).val();
  var count = 0;

  $("div .caption").each(function() {
    if($(this).text().search(new RegExp($filter, "i")) < 0) {
      var $pic = $(this).parents(".image-wrapper");
      $pic.fadeOut();

    } else {
      $(this).parents(".image-wrapper").fadeIn();
      count++;
    }
  });

  var numberItems = count;
  $("#filter-count").text("Number of Pictures = " + count);

});
