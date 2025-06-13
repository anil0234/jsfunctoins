// function are one of the most powerful features in java scripts
//
//
// They alloe you to reuse the powerful features

// Functions are used always like declaration + calls
//syntax
// Function declaration
sayHello()
function sayHello(){
    console.log("Hello")
} 


sayHello()
// // Function calling 
// sayHello()
// sayHello()
 

// console.log(a)
// let a = 10;

function sum(num1 , num2) {
    console.log(num1 + num2)
}
sum(10,5) 

 // Functions with Parameters

 function sum(num1,num2,num3){
    console.log(num1 + num2 + num3)
 }
 sum(10,10,10)

 function mul(a,b,c){ 
    console.log(a*b*c)
 }
 mul(5,10,5)

function div(a,b){
    console.log(a/b)
}
div(10,20)


// let fname = "Anil";
// let age = 21;

// function sayName(){
//     console.log("My name is " + fname + "age is " + age)
// }
// sayName() 

let fname = "Anil";
let age = 21;

function sayName(){
     console.log("My name is Anil" + fname + "age is" + age)
     console.log('My Name is ' + fname + 'age is' + age)
     console.log(`My Name is ${fname} age is ${age}`)
}
// double
// single
// template literal ( introduced is es6 after 2015)
sayName()

// Arrow Function


// How to covert simple to arrow function 
// 1.Remove function keyword and add let
// 2.add = sign after function name 
// 3.add => sign after ()

// My name is Anil. Learning in Global


