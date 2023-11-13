// singleton  object formed using constructor
// Object.create

const mySym=Symbol("key1")

//object literals
const jsUser={
    name:"Amit",
    "Full Name":"Amit Upadhyay",
    age :23,
    location:"Lucknow",
    email: "amit@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    [mySym]:"myKey1"

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["Full Name"])
console.log(jsUser[mySym])

jsUser.email="amit@microsoft.com"
// Object.freeze(jsUser) //prevent any change in value stored in the object
jsUser.email="amit@apple.com"
console.log(jsUser)

jsUser.greeting= function(){
    console.log("Hello jsUser");
}
jsUser.greetingTwo= function(){
    console.log('Hello JS User,${this.name}');
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


