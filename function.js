// function printUserName(uName, uAge){
//     // if(uAge<40){
//         console.log(`Hi ${uName}, your age is ${uAge}`);
//     // }
// }

// printUserName("DS",30)
// printUserName("DS",50)
// printUserName("DS",10)
// printUserName()

// Default parameter

// function printUserName(uName="Shan", uAge=25){
//     console.log(`Hi ${uName} your age is ${uAge}`);
// }

// printUserName(undefined, 78)

// let employeeId;
// let newID = employeeId || 123456789;

// console.log(newID);

//Return type

// function findRectArea (l,b){
//     return l*b;
// }
// let newVal = findRectArea(3,3);
// console.log(findRectArea(5,6), newVal);

// function findRectArea (l,b){
//     console.log("test");
    
//     return l*b;
//     console.log("not working after return");
    
// }
// let newVal = findRectArea(3,3);
// console.log(findRectArea(5,6), newVal);

// function findRectArea(l,b){
//     let condition = false;
//     if(condition){
//         return l*b;
//     }else{
//         return null
//     }
// }

// console.log(findRectArea(9,8));

// function cubic(num){
//     return (num**3, "ds", 54, "Eighty")
// }
// let newVal = cubic(5);
// console.log(newVal);

//Non-return type
// function name1(){
//     console.log("Non-return type");
//     return 5
// }
// let noReturn = name1();
// console.log(noReturn);


// Variable Declaration-------------------------------------------

//var function scope---------------------
 

// function outerFunction(){
//     if(true){
//         var functionVar = "I'm a Variable" 
//         console.log(functionVar);
        
//     }
//     console.log(functionVar);
// }

// outerFunction()

//let const block scope----------------------

// function blockScoped(){
//     if(true){
//         let blockVariable = "I'm a Block scoped variable";
//         const blockVariable1 = "I'm a const Block scoped variable";
//         console.log(blockVariable);  
//         console.log(blockVariable1);  
//     }
//         console.log(blockVariable);    
//         console.log(blockVariable1);    
// }

// blockScoped()

//Global scope & Block scope ------------------------------------

// var globalScopedVar = "I'm accessible throughout the global context";
// let blockScoped = "I'm a let variable";
// const blockScoped1 = "I'm a const variable";

// console.log(window.globalScopedVar);
// console.log(window.blockScoped);
// console.log(window.blockScoped1);


//Global variable and Local variable----------------------------------

// var a = 10;
// let b = 20;
// const c = 30;

// function accessGlobalLocalVar(){
//     // var a = 100;
//     // let b = 200;
//     // const c = 300;
//     console.log(a+b+c);
//     function innerFunction(){
//         // var a = 101;
//         // let b = 201;
//         // const c = 301;
//         console.log(a+b+c); 
//     }
//     innerFunction()
//     console.log(a+b+c);
    
// }

// // console.log(a+b+c);
// accessGlobalLocalVar()

//Types of Function -----------------------------------------------
//Named Function
//Anonymous Function
//Arrow Function

//Named Function ------------------------------

// function add(uName){
//     console.log("Named function" + uName);
// }
// add("Ds")

//Ananomous Function

// let ananFun = function (a,b){
//     console.log("Ananomous Function" + " "+ (a*b));  
// }
// ananFun(5,4)

//Arrow Function

// let fatArrow = (a,b) =>{
//     console.log("Arrow Function" + (a+b));  
// }
// fatArrow(1,2)

// //Single statement
// let fatArrow1 = (a,b) => console.log("Single statement" + (a+b));
// fatArrow1(1,2)

// //Single Parameter
// let fatArrow2 = a => console.log("Single Parameter" + a);
// let fatArrow3 = uName => console.log("Single Parameter" + uName);
// fatArrow2(5)
// fatArrow3("Gopal")

// ------------------------------------------

// let firstName = "Brendon";

// // let returnedFun = (fName) =>{
// //     return fName;
// // }

// let returnedFun = fName => fName

// let finalOutput = returnedFun(firstName)
// console.log(finalOutput);

//Higher Order Function ---------------------------------------------

// function function1(){
//     console.log("I'm a Higher order function");
// }

// function function2(){
//     console.log("I'm a call back function");
// }

// function1(function2())

// function add(a,b,callBack){
//     callBack(10,20)
//     console.log(a+b);  
// }
// function subtract(num1, num2){
//     console.log(num1+num2);
// }

// add(10,10,subtract)





