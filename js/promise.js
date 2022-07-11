// var users = [
// {  name: "rohan",
//     email: "abc"  },
// {  name: "ram",
//     email: "xyz"
// }]
// var promise = new Promise(function (resolve, reject) {
//     try{
//         resolve(users)
//     } catch (error){
//         reject(error)
//     }
// });


// var url = "data.json";

// var api = "https://jsonplaceholder.typicode.com/todos"
// fetch(api)
//     .then(res => res.json())
//     .then((data) => {
//         displayPosts(data)

//     })
// .catch((err)=> console.log(err))

// var color,
// spanText = document.querySelector('span');

// function changeColor(val) {
 

// if (completed==true) {
//     color = "green";
// } else {
//     color = "red";
// }

// spanText.style.color = color;
// }


// function displayPosts(api) {
//     let postE1 = document.getElementById("api");
//     let output = "";


//     for (post of api) {
//         output += `<div class="post">
//             <div>userid- ${post.userId}</div>
//             <div>id- ${post.id}</div>
//             <div>title- ${post.title}</div>
//             <div>completed- ${post.completed}</div>

         
// </div>`
//     }
//     postE1.innerHTML = output;
// }


async function getUsers(){
    let url="data.json";
    try{
        let res = await fetch(url);
        return await res.json();
    }catch(err){
        console.log(error);
    }
}

async function renderUsers(){
    let users = await getUsers();
    let html = "";
    users.forEach(user => {
        let htmlsegment= `<div class="user">
            <img src="${user.profileURL}">
            <h2>${user.firstName} ${user.lastName}</h2>
            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
        </div>`
        html += htmlsegment;
    });
    let container= document.querySelector('.container');
    container.innerHTML =html;
       
    }
    renderUsers()
