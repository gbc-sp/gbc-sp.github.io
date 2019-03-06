const startAnimation = () => {
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


}




if (localStorage.getItem('skillpod') != 'true') {
  const modal = document.createElement('div');
  modal.classList.add('modal')
  modal.innerHTML = `
    <form class="modal-form" id="skillpodmodal">
      <label class="modal-label">What's the secret word?</label>
      <input type="password" name="password" id="password">
      <input type="submit" name="submit" value="send">
    </form>
  `;
  document.body.appendChild(modal);

  document.getElementById('skillpodmodal').addEventListener('submit', e => {
    e.preventDefault();
    console.log(this.password.value)
    if (this.password.value == "skillpod") {
      localStorage.setItem('skillpod', 'true');
      document.body.removeChild(modal);
      startAnimation();
    }
  });
}
else {
  startAnimation();
}