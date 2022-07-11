var url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
    .then(res => res.json())
    .then((data) => {
        displayToDos(data)

    })
.catch((err)=> console.log(err))


function displayToDos(url) {
    let Url = document.getElementById("url");
    let output = "";
    for (user of url) {
        output += `<div class="post">
            <div>${user.userId}</div>
            <div>${user.id}</div>
            <div>${user.title}</div>
            <div>${user.body}</div>
</div>`
    }
    Url.innerHTML = output;
}