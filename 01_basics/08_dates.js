//getting date at current instance of time
let myDate= new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof(myDate))


//if we want to declare an specific date according to our need
let createDate=new Date(2023,0,23)
console.log(createDate.toDateString())

let mycreateDate=new Date("2023-01-23")
console.log(mycreateDate.toDateString())

//timestamp
let mytimeStamp=Date.now() // this gives us time in milliseconds
console.log(mytimeStamp)
console.log(mycreateDate.getTime())
console.log(Math.floor(Date.now()/1000))  // for getting time in seconds
