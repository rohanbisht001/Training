var btn = document.getElementById("btn");
var navItems = ["home", "services", "faq", "contact"]


var promise = new Promise(function (resolve, reject) {
    try{
        resolve(navItems)
    } catch (error){
        reject(error)
    }
});
promise
    .then((res) => {
        displaymenu(res)
        })
    .catch((err) => console.log(err))

function generateMenu(data){
    var navE1 = document.getElementById("menu");
    var output = "<ul>";
for (navItem of data) {
    output += `<li><a href="${navItem}.html">${navItem}</a></li>`
}
output += "</ul>"
console.log(output)
navE1.innerHTML = output;
}


function createMenu(){
    generateMenu(navItems)
}
btn.addEventListener("click",createMenu);


  