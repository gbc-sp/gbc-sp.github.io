var bodyMain = document.getElementById("body");

var examplePP = document.getElementById("examplePP").addEventListener("click", function(){
  let ppPop = document.getElementById("portfolioPop");
  ppPop.style.display = "block";
  bodyMain.style.overflow = "hidden";
});

var anotherClosePop = document.getElementById("anotherClosePop").addEventListener("click", function(){
  let ppPop = document.getElementById("portfolioPop");
  ppPop.style.display = "none";
  bodyMain.style.overflow = "auto";
});
