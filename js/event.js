function welcome() {
    alert("Go Back")
}
var btn = document.getElementById("btn");
btn.onclick = welcome;
//event delegation
//event.addeventlistener(eventname, event handler)
//btn.addEventListener("click",welcome);
function taskTwo(e){
    console.log("task two")
    e.preventDefault()
}
// function taskOne(e){
//     console.log("task one")
//     if(true)
//     e.stopImmediatePropagation()
// }
function parentHandler(ev) {
    console.log("this is a parent")
   
}
function childHandler(ev) {
    console.log("this is a child")
    ev.stopPropagation()
}

var q = document.getElementById("xyz")
var p1 = document.getElementById("parent");
var p2 = document.getElementById("parent1");
var c1 = document.getElementById("child");
var c2 = document.getElementById("child1");
q.addEventListener("click",taskTwo)
p1.addEventListener("click", parentHandler);
p2.addEventListener("click", parentHandler, true);
// c1.addEventListener("click",childHandler);
// c1.addEventListener("click",taskOne);
// c1.addEventListener("click",taskTwo);

// c2.addEventListener("click",childHandler, true);

