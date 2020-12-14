window.onscroll = function() {
    AddSticky();
}; 

// Find the navbar
var navbar = document.getElementById("navbar");

// get offset position of navbar
var sticky = navbar.offsetTop;

// Add sticky class to navbar when reach scroll position and remove it when you leave
function AddSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

// Hiding and displaying text + changing background color of the button 
function displayText(textId, buttonId, btnText1, btnText2) {
    var x = document.getElementById(textId);
    var y = document.getElementById(buttonId); 
    if (x.style.display === "none" && y.getAttribute('class') === 'style-one' &&  y.innerHTML === btnText1) {
      x.style.display = "block";
      y.setAttribute('class', 'style-two');
      y.innerHTML = btnText2;
    } else {
      x.style.display = "none";
      y.setAttribute('class', 'style-one');
      y.innerHTML = btnText1;
    } 
    /*
    if (y.getAttribute('class') === 'style-one') {
        y.setAttribute('class', 'style-two');
    }
    else {
        y.setAttribute('class', 'style-one');
    } 
  */
}

function displaypasswd(textId, buttonId) {
    var x = document.getElementById(textId);
    var y = document.getElementById(buttonId); 
    if (x.style.display === "none" && y.getAttribute('class') === 'style-one' &&  y.innerHTML === 'show password') {
      x.style.display = "block";
      y.setAttribute('class', 'style-two');
      y.innerHTML = 'hide password';
    } else {
      x.style.display = "none";
      y.setAttribute('class', 'style-one');
      y.innerHTML = 'show password';
    } 
}