let boxIndex = 1;
showBoxes(boxIndex)

function currentBox(n) {
    showBoxes(boxIndex = n);
}

function showBoxes(n) {
    let i;
    let boxes = document.getElementsByClassName("b");
    let dots = document.getElementsByClassName("btn");
    if (n > boxes.length) {boxIndex = 1}    
    if (n < 1) {boxIndex = boxes.length}
    for (i = 0; i < boxes.length; i++) {
      boxes[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    boxes[boxIndex-1].style.display = "block";  
    dots[boxIndex-1].className += " active";
}

function toLink(n){
    switch (n){
      case 1:
        location.href = "https://web.whatsapp.com/";
        break;
      case 2:
        location.href = "https://www.facebook.com/";
        break;
      case 3:
        location.href = "https://www.instagram.com/khyaruchi/";
        break;
    }
}

function responsiveBar(){
  const x = document.getElementById("myBox");
  if (x.style.display === "none") {
    x.style.display = "block";
    window.setTimeout(function(){
    x.style.opacity = 1;
    },0);
  } else {
    x.style.opacity = 0; 
    window.setTimeout(function(){
      x.style.display = 'none';
    },200);
  }
}