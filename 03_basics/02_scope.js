
//Scope
let a=300
if(true){
    let a=10
    const b=20
    var c=30//we avoid using var
    console.log("Inner",a)
}
//console.log(a)
//console.log(b)
console.log(c) //problematic going out of scope
console.log(a)

function one(){
     const userName="Youtube"
    function two(){
        const website="Icecream"
        console.log(userName)
    }
    //console.log(website)  bade log choto se icecream nahi chin sakte
    two()
}
one()
//addOne(5)can be called before declaration also
function addOne(num){
    return num+1
}
addOne(5)
//addTwo(6) cannot be called
const addTwo= function(num){
    return num+2
}
addTwo(6)
