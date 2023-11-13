function sayMyName(){
    console.log("My Name is Amit")
}
sayMyName()  //function call

function addTwoNumbers(N1,N2){ //parameters of functions
    //console.log(N1+N2)
    return(N1+N2)
}
const result=addTwoNumbers(50,50)  //passing arguments
console.log(result)

function logMeInUserMessage(userName=""){ //making person name atleast null
    if(userName!=undefined){
    return(`Person named ${userName} has logged in`)
    }
    else{
        console.log("Please enter a username")
    }
}
console.log(logMeInUserMessage('Amit'))
console.log(logMeInUserMessage())


function calculateCartPrice(...num1){ //rest operator
    return(num1)
}
console.log(calculateCartPrice(100,400,500,2000))

const user={
    name:"Amit",
    price:150
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and price is ${anyObject.price}` )
}

handleObject(user)
handleObject({name:"Sam",price:6000})

const myNewArray=[100,200,300,400,500]

function getSecond(anyName){
    return(anyName[1])
}
console.log(getSecond(myNewArray))