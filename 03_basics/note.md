Javascript execution context
whenever we give any code {} to javascript first global execution context is formed it is kept in "this"

browser have window object as this value
functional execution context

{}
memory creation phase : memory allocation of space to variable
execution phase: actual work

let val1=10
let val2=20
function AddNum(num1,num2){
    let total=num1+num2
    return total
}
result1=AddNum(val1,val2)
result2=AddNum(30,40)

1. start from global execution and allocated to this
2. memory phase
     val1,val2->undefined
     AddNum-> Definition
     result1,result2->undefined 
3. 
