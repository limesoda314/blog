// The digital clock function!!! 
function displayClock() {
    var d = new Date();
    document.getElementById("date").innerHTML = d.toLocaleDateString();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

setInterval(displayClock, 100); 
