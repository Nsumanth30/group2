function demo(){
    console.log("Functions concept")
}
demo();


// //In java this is error
function demo(){
    console.log("Functions concept")
}
demo(2,3,4);// arguments are passing at the time of function calling

// // A function can be called many times
function demo(){
    console.log("Functions concept")
}
demo();
demo();
demo();

function add(a,b){
    console.log("Functions concept")
}
add();

function demo(){
    console.log("Functions concept")
}
demo();


///IIFE function
(
    function(){
        console.log("IIFE");//Immediate invoke function expression
    }
)(); // iife can be called only one time 

//current version of javascripit is es14
//es-ECMA(eurepoean computer manufacturing association) scripit

//Arrow function:It is introduced in es6
//Arrow function is similar to lambda expression  in java
let x=()=>console.log("Arrow function")
x()

//Explicit:In this we use return keyword human is return something explicitly

function test1(a,b){
    return a+b;
}
console.log(test1(5,5,));

//Explict function uses retrun keyword
let x1=(a,b) =>{return a+b};
console.log(x1(10,10));
//Implict function does not use return keyword
let y=(a,b) => a+b;
console.log(y(100,400));

for (let i=1;i<=5;i++){
    for (let j=1;j<=5;j++){
        console.log('*');
    }
}