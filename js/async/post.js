let form = document.getElementById("signup")
var api_url = "https://jsonplaceholder.typicode.com/users";
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var id = form.elements["id"].value;
    var name = form.elements["name"].value;

    var userName = form.elements["username"].value;
    var email = form.elements["email"].value;
    var address = form.elements["address"].value;
    var phone = form.elements["phone"].value;
    var website = form.elements["website"].value;

    let formData = {
        id,
        name,
        userName,
        email,
        address,
        phone,
        website
    }

    const response = await fetch(api_url, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(formData)
    })
    console.log(await response.json())
})