//  There are 3 types scoping in js 
// 1.Block scope
// 2.Function scope
// 3.Global scope

//Block scope
//Block means code access only in the braces
//Example : {}
//                       var   let   const
// Inside of the block    
// Outside of the block

// // Inside the block in var

// { 
//     let a = 10;
//     let b = 30;
//     console.log(a)
//     console.log(b)
// }


// // Inside the block let

// {
//   let a = 10;
//     let b = 20;
//     console.log(a)
//     console.log(b)  
// }
// {
//     var a = 25;
//     var b = 45;
// }
// console.log(a)
// console.log(b)

// // Outside of the block let
// { 
//     let num1 = 20;
//     let num2 = 10;
// }
// console.log(num1)
// console.log(num2)

// Function scope 
//                           var    let     const
// Inide of the function     
// Outside of the fuction  

// Inside of fuction var
// function s1() {
//     var q = 10;
//     var p = 20;
//     console.log(q,p)
// } 
// s1() 

// // inside function let
// function s2() {
//     let n = 30;
//     let p = 40;
//     console.log(n,p)
// } 
// s2()  
  

// // inside of the fuction const
// function s3() {
//     const q = 22;
//     const p = 33;
//     console.log(q,p)
// } 
// s3()  

// // outside of the function var
// function s1(){
//      var q = 10;
//     var p = 20;
   
// } 
//  console.log(q,p)
//  s1() 

//  // outside of the function const
//  function s2() {
//     const q = 22;
//     const p = 33;
    
// } 
// console.log(q,p)
// s2()  

// // outside function let
// function s2() {
//     let n = 30;
//     let p = 40;
    
// } 
// console.log(n,p)
// s2()  
   


// global fuction

// Global scope                       var    let   const
 //

 var a = 3;
 var  b = 5;
 const c =7;
 console.log(a,b,c)

{
 console.log(a,b,c)
}

function sayhi(){
    console.log(a,b,c)
}
sayhi()  


//resign
//redeclare

var fname = 'Anil';
 

fullname= "Anil"
console.log(fullname)

var a = 10;
var b =20;
console.log(a)
a =20;
console.log(a)


//                         var   let  const
//Resign                   ✅    ✅   ❌
//Redeclare                ✅    ❌   ❌


let s4 =10;
let s4 =20;
s4 =30;

