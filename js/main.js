
var progress;

// if (slidingRow) {
//   var tilesExist;
//   for (var i = 0; i < slidingRow.length; i++) {
//     tilesExist = slidingRow[i].childElementCount;
//     slidingRow[i].style.gridTemplateColumns = "repeat("+tilesExist+", 10em)";
//   }
// }

$("#goHelp").click( function() {
  window.location.href = "help.html"
});

if(localStorage.moduleData){
  progress = JSON.parse(localStorage.moduleData);
  progress = progress.modules;
}
else {
  $.getJSON( "data/modules.json", function( data ) {
    progress = data.modules;
    console.log(data);
    localStorage.moduleData = JSON.stringify(data);
  });

}
$(document).ready( function() {

  $("#selfworkModule").click( function() {
    window.location.href = "selfworkMod.html"
  });

  $("#designInnovationModule").click( function() {
    window.location.href = "designInnovationMod.html"
  });

  $("#smarterLearningModule").click( function() {
    window.location.href = "module-start.html"
  });

  // function populateTips(id) {
  //   let compSelected = compSelection.value;
  //   if (!inPopUp) {
  //     let moduleTitle = document.getElementById("moduleTitle");
  //     let tipsContent = document.getElementById("tipsContent");
  //     compSelection.innerHTML = "";
  //     for (var i = 0; i < progress[id].comps; i++) {
  //       let number;
  //       if (i == 0) { number = "one"; }
  //       else if (i == 1) { number = "two"; }
  //       else if (i == 2) { number = "three"; }
  //       else { number = "four"; }
  //       compSelection.innerHTML += '<option value="'+i+'">competency '+number+'</option>';
  //     }
  //   }


  });
