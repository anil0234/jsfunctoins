// setTimeout 
// Executes a function once after a delayed given time in milliseconds

// 1000 ==> 1 second
// 5000 ==> 5 seconds

function sayGlobal() {
    console.log("Hello Global")
}
// It takes 2 parameters
// 1st fuction 
//2nd time in milliseconds
let seconds = 5
setTimeout(sayGlobal,seconds * 10000)


//setinterval
//executes a function repeatedly at given
//time in milliseconds


//and to stop is .... use ctrl+c
setInterval(sayGlobal,1000)
//unless and untill we stopped it

