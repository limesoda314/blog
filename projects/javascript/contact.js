
function submitForm() {
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value; 

    document.getElementById("test").innerHTML = firstname + " " + lastname; 
}