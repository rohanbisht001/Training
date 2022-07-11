var loginform=document.getElementById("hospform");
loginform.addEventListener("submit",function(e)
{
    e.preventDefault();

var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var dob=document.getElementById("dob").value;
var doa=document.getElementById("dateofappointment").value;
var doctor=document.getElementById("doctor").value;
var toa=document.getElementById("toa").value;
var required=document.getElementById("yes").value;
var visited=document.getElementById("yes1").value;
var experienced=document.getElementById("yes2").value;
required.checked ? yes="Yes": yes="No";
visited.checked ? yes="Yes1": yes="No1";
experienced.checked ? yes="Yes2": yes="No2";

// var loginData={

    

localStorage.setItem("fname",fname);
localStorage.setItem("lname",lname);
localStorage.setItem("phone",phone);
localStorage.setItem("email",email);
localStorage.setItem("dob",dob);
localStorage.setItem("doa",dateofappointment);
localStorage.setItem("doctor",doctor);
localStorage.setItem("toa",toa);
localStorage.setItem("required",yes);
localStorage.setItem("visited",yes1);
localStorage.setItem("experienced",yes2);
})

// var data=localStorage.getItem("logindata")
// form.elements["name"].value=data.name

