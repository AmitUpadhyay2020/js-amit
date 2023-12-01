//arrow function doesnot contain this
const user={
    username:"Amit",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);

    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

//this is used to print current context  console.log(this)

function chai(){
    console.log(this);//will give undefined
}
chai()

/* 
()=>{}
we can hold this arrow function inside a name
const addTwo=()=>{}
*/
const Tea = (n) =>{
    let username="Sumit"
    console.log(this.username)
    add=2+n
    console.log(`You want ${add}, no of chai cups`)
}
Tea(2)


