//var a ----------------------------------

// console.log(a); //undefined

// var a=10;

//let b ----------------------------------
// console.log(b); //Temporal Dead Zone //Referenceerror
// let b = 20;

// console.log(c); //Temporal Dead Zone //Referenceerror
// const c = 30;

//Function Declaration ---------------------

// sample()
// function sample(){
//     console.log("I'm in");
// }

//let sample1
// sample1()
// let sample1 = function(){
//     console.log("Am i accessible"); //Using the variable let const on the anonyms function so it's facing the reference error
// }

//Var sample1 //In function to use the variable face the typeerror on the result

// sample1()
// var sample1 = function(){
//     console.log("Am i accessible"); //var 
// }

//hoisting work on var, named function

//Currying Function
//IIFE(Self Invoked Function)
//Closure Function


//uncurrying Function

// function add(a,b,c){
//     console.log(a+b+c);
// }

// add(3,3,3)

//Currying Function ---------------------
// function add(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);     
//         }
//     }
// }
// // add(3)(5)(5) //Chaining call

// let curry1 = add(100)---------------------
// let curry2 = curry1(200)
// curry2(300)

// console.log(curry1);
// console.log(curry2);
// // console.log(curry3);

//Self Invoke function -----------------------------

// (function (){
//     console.log("Self Invoked function"); 
// })()


// (function (uName, age){
//     console.log("Hi" + uName + age);  
// })("Ds", 18)


//Closure ----------------------------------------------

// function outerFunction(){
//     let outerVariable = "I'm from outer scope"
//     function innerFunction(){
//         console.log(outerVariable);
//     }
//     return innerFunction
// }

// // let innerFun = outerFunction();
// innerFun()

//Generator function ----------------------------------------

// function* generatorFunction(){ ---------------------------------------
//     yield "First value"
//     yield "Second value"
//     yield "Third value"
//     return "Final value"
// }

// let generator = generatorFunction()

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// function* url(){
//     yield "https:/"
//     yield "www.ds.com"
//     yield "homepage"
// }

// let origin1 = url()

// console.log(origin1.next().value);
// console.log(origin1.next().value);
// console.log(origin1.next().value);
// console.log(origin1.next().value);



