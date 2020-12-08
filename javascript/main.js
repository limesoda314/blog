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