var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;
    var pnumber = form.elements["number"].value;
    var email = form.elements["email"].value;
    var dob = form.elements["dob"].value;
    var doa = form.elements["doa"].value;
    var toa = form.elements["toa"].value;
    var ds = form.elements["ds"].value;
    var q1 = form.elements["q1"].value;
    var q2 = form.elements["q2"].value;
    var q3 = form.elements["q3"].value;

    var formData = {
        fname,
        lname,
        pnumber,
        email,
        dob,
        doa,
        toa,
        ds,
        q1,
        q2,
        q3

    }

    console.log(formData)
    var store = JSON.stringify(formData)
    console.log(store)
})
