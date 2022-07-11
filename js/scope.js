var a=10;
function sumTen(){
    var b=20; 
    //b=20 without var it becomesa global
    return a+b;
}
sumTen()
console.log(b)
function parent(x){
    var x=20;
    function child(){
        return x+20;
    }
    return child;
}

