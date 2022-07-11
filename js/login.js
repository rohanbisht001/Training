var loginform = document.getElementById("login");
login.addEventListener("submit", function(e){
e.preventDefault();
var uservalue = document.getElementById("username"); 
//console.log(loginform.elements['username'].value)
var username = loginform.elements["username"].value;
if (username.length<6){
    console.log("error")
    return null;
}
var pass = loginform.elements["pass"].value;
var loginData = 
{
    username,
    pass
}

console.log(loginData)
var store = JSON.stringify(loginData)
console.log(store)
}) 

