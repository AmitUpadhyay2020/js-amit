// immedietly invoked function expression (IIFE)

(function chai(){
    console.log("DB connected")
})();

/*
in first parenthesis we write Function and in second we call the function
()()

we write IIFE so that we do not get problem from global scope pollution 

*/
((name)=>{
    console.log(`DB connected TWO ${name}`)
})("Amit");

(function mycode(){
    console.log("DB connected THREE")
})()

//it doest not able to know when to end the context and hence we have to give the semicolon 