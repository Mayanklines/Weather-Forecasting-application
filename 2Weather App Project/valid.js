function validate() { 
    var username = document.getElementById("input"); 
    var password = document.getElementById("pass");
    if (username.value === "a" && password.value === "a") {
        alert("Login Successful");
        window.location.replace("index.html");
        return false;
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}   
   