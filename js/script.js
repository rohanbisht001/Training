/*alert("welcome to java script")
String "java script"
Number 122.7899
Boolean true/false
undefined
null*/

/*var brand, quantity, category,ram,price;
brand="lenovo";
category="phone";
quantity=1;
ram = "8 gb"
price= 55000;
console.log(brand,quantity,category,ram,price);
var Name="Rohan";
var firstName="Rohan";
var lastName="Bisht";
var fullName= firstName+" "+lastName;
var fullName = `welcome ${firstName} ${lastName}`;
var students=["rohan", 21, null, fullName,[1,2,4,[34,67]] ];*/
/*function fn(){
    var lang = "english";
    console.log(lang);
}
fn()*/
var dog = {
    color: "grey",
    height: "50 feet",
    price: 2000000,
    activities:["play","barks","eats"],
    address:{
        city:"bengaluru",
        met:function(){}
    },
    runs: function(){
        console.log("dog runs")
    },
    eats: function(){
        console.log("dog eat's")
    }
}
console.log(dog.color);
console.log(dog.height);
console.log(dog.price);

dog.runs()
dog.eats()
console.log(dog.address.city)

function cook(param1,param2,param3){
    var result= `by using ${param1} and ${param2} and ${param3} I made recipe,`;
    return result;

}
function sum(a,b){
    return a+b;
}


