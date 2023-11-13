const tinderUser=new Object();

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser)


const regularUser ={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Amit",
            lastname:"Kumar"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname)  //use of question mark in case of checking value


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}


const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

/* we can also use spread operator
obj3={...obj1,...obj2}
*/
//usually from the database wqe recieve array of objects
const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
]

console.log(user[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))