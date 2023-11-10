/*data type are divided into two parts on the basis of they are kept and accessed from the memory*/

/* Primitive:  call by value uses:stack type of memory
        #1 String
        #2 Number
        #3 Boolean
        #4 null  typeof-object
        #5 undefined  :if we only declare and do not assign any value
        #6 Symbol :used to provide uniqueness to the component
        #7 BigInt: 12345657891229n
        
    Non-Primitive: by reference  uses:heap type of memory
        #1 Array
        #2 Objects typeof function
        #3 Functions
*/

//Javascript is a dynamically typed language


//Example for Symbol
const id=Symbol("123")
const anotherID=Symbol("123")
console.log(id===anotherID)


const hero=["sita","ram","hanuman","laxman"]
let myOBj={
  name: "Amit",
  age:22,
}

const myFunction= function(){
    console.log();
}
//stack allocation reference changed
let myName="Amit"
let anotherName=myName
anotherName="King"

console.log(myName)
console.log(anotherName)

//heap allocation reference changed
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="amit@google.com"

console.log(userOne.email)
console.log(userTwo.email)