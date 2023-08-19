function buttonClicked(){
    alert("Button clicked");
}

window.onload=function(){
  var btn = document.querySelector(".btx");
  btn.addEventListener("click", buttonClicked, true);
}