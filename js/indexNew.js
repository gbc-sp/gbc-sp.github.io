var goalFieldOne = document.getElementById('goalFieldOne');
var goalFieldTwo = document.getElementById('goalFieldTwo');
var bottomPos = -100;
var screenWidth = $(window).width();

goalFieldOne.addEventListener("change", function() {
  goalFieldTwo.classList.remove("hidden");
});

$("#progBtn").click(function() {
  $("#goalsScreen").show();
  $("#introScreen").fadeOut();
});

var pos = 0;
$("#progBtn").hide();
showText();

function showText() {
  console.log("in text");
  slideUp();
  setTimeout (function() {
    $(".txt-anim-up").children().eq(pos).addClass("anim-target");
    if (pos == 2) {
      setTimeout (function() {
        $("#progBtn").show();
      }, 1000);
    }
    pos++;
    if (pos <= 3) {
      showText();
    }
    

  }, 2000);
}

function slideUp() {
  if (screenWidth < 16*48) {
    $(".images").css({
      right:bottomPos+"%"
    });
    bottomPos += 100;
  }
  else {
    $(".images").css({
      bottom:bottomPos+"%"
    });
    bottomPos += 100;
  }
    
}
