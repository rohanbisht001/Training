//  var name = "rohan";
//  let lang ="arabian";

//  console.log(lang);
//  console.log(name);

// let welcome = () => "welcome to arrow function"
// let sum = (a,b)=>a + b ;
// let greet= name => "welcome to $(name)"
// // welcome()
// function sum(...data){
//     var total = 0;
//     for(price of data){
//     total+=price
// }
// return total;
// }

var nums = [1,2,3,4,5,6,7,8,9,0]
let (a,...c)=nums;
var person = {
     name: "abcdef",
     id: 1233
}
var {name : fname,mail} = person
console.log(fname);
console.log(mail)
