class cricketer{
    constructor(runs,wickets){
        this.runs = runs
        this.wickets = wickets;
    }
    getruns(){
        return this.runs
    }
    setruns(name){
       this.runs = runs
    }
    getwickets(){
        return this.wickets
    }
    setwickets(name){
       this.wickets = wickets
    }
    getdetails(){
return `the runs is $[this.runs]- name is $[this.wickets])`
    }
}
let cricketer1 = new cricketer ("century","hattrick")
console.log(cricketer1.getruns())

class electronics extends cricketer {
    constructor(runs , wickets, ram){
    super(runs, ram, wickets )
    this.ram = ram
    }
}
let ele = new electronics ("century","hattrick")
console.log(ele.getdetails())