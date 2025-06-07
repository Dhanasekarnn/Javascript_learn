
//IDENTIFIER RULES 1 ------------------------------------------
/* ALL JAVASCRIPT VARIBLES MUST BE IDENTIFIED WITH UNIQUE NAMES
- Names Must begin with a Letter.
- Names can also begin with $ and _.
- Names are Case sensitive.
*/

/*
- Names are Case sensitive.
let lname = "gopal";
let Lname = "captial Gopal";

console.log(lname, Lname);
*/

/*
- Names can also begin with $ and _.
let $lName = "Single Page Application";
let _lName = "SPA";
console.log($lName, _lName); */

//Camel case
//Pascal case
//Under case

/*
let newEmployeeId = 10; //camelCase
let NewEmployeeId = 15; //PascalCase
let New_Employee_Id = 10; //Under_Case
let new_employee_id = 10; //under_case
*/

//Different between var, let and const 2 ---------------------------------

/*
//var age = 30; //Declaration and Initialization

var age; // Declaration
age = 40; //Initialization or assigning

var age = 70; // Re-declaration
age = "Eightly" // Re-initialization and Reassign

console.log(age);

*/

/*
// let newAge = 10; //Declaration and Initialization

let newAge; //Declaration
newAge = 20; // Initialization and Assigning

//let newAge = 40; // Re-declaration is not possible
newAge = 40; // Re-assign

console.log(newAge);
*/

/*
const employeeName = "xyz"; //Declaration and Initialization
const employeeName= "xy"; // Re-declaration is not possible
employeeName = "x"; //Re-assign is not possible

console.log(employeeName);
*/

//Printing statements 3----------------------------------------

// let newAge = 21;

// alert( newAge);
// document.write ( newAge );
// document.writeln(newAge);
// confirm(newAge);

// let userAge = prompt("Enter your Age");
// console.log(userAge);

// let userAge;
// console.error(userAge);
// console.warn(userAge)
// console.clear();

//Datatype 4 ----------------------------------------------------

//Datatype have two types that are Primitive Datatype and Nonprimitive Datatype

//Primitive Datatype ---------------------------------------
/*
//Number
 var num = 10;
 var num =1.35;     

//string
let userName = "Javascript is a scripting language";
userName = 'Javascript is a single threated Language';
userName = `ECMA Javascript`;

//Boolean
let condition = true;
condition = false;

//Undefined
let noValue;

//null
let emptyvalue = null;

 console.log(num, userName, condition, noValue, emptyvalue);
 */

//single line comment -------------------------------------

/* multiple line comment 
   Javascript
   React JS
*/

// Non-Primitive Datatype or Reference type -----------------------


// Array

/*
let multipleUsers = ["Apple", "Banana", "Carrot", "DragonFruit", "Egg"];

console.log(multipleUsers);
console.log(multipleUsers[3]);
console.log(multipleUsers.length);
console.log(multipleUsers.length-1);
console.log(multipleUsers[multipleUsers.length-1]);
*/

//object --------------------------------------
//key value pair
/*
let vehicle ={
    vehicleType : "Four Wheeler",
    brand : "Hyundai",
    price : 10000000,
    fuleType : "Diesel"
}

console.log(vehicle);
console.log(vehicle.brand);
console.log(vehicle.vehicleType);

*/

//Operator ----------------------------------------------

//Arithmatic Operator---------------------------------

/*
//Addition
console.log(5 + 5);

//Subtraction
console.log(6-2);

//Multiplication
console.log(10 * 2);

//division
console.log(10/2);//Quotient = 5
 
//modulus
console.log(10 % 2); //Modulas --Reminder = 0

//Increment (++)

let num = 10;
num++; //Post Increment
++num; //Pre Increment
console.log(num);

//Decrement (--)
let num1 = 11;
num1--; //Post Decrement
--num1; //pre Decrement
console.log(num1)

*/

//Post Increment ---------------------------------------------
/*
    1.Substitute
    2.Operation
    3.Increment
*/
// let num =20; //21
//  let num1 = num++;
// // num1 = 20++
// // num1 = 20
//  console.log(num, num1);

// let num = 20; // 21 //22

// let num1 = num++ + num++;
// //num1 = 20++ + num++
// //num1 = 20 + 21++
// //num1 = 20 + 21

// console.log(num, num1); // (22, 41)

//Pre Increment ----------------------------------
    // 1.Substitute and Increment
    // 2. Operation

// let newNum = 20;
// let newNum1 = ++newNum;
// // newNum1 = ++20;
// // newNum1 = 21;
// console.log(newNum, newNum1); //  

// let newNum = 20;

// let newNum3 = ++newNum + ++newNum;

// console.log(newNum, newNum3); //22 43

//Pre Decrement & Post Decrement --------------------

// let num4 = 10; // 9 

// let num5 = num4-- + --num4;

// // num5 = 10 + 8

// console.log(num5, num4);

//===============================================================

//Assignment Operator 

//Addition

// let age1 = 20;
// let addititonal = 5;
//  age1 += 10; // age1 = age1 + 10 = 20+10 =30
//  age1 += addititonal // age1 = age1 + additional - age1 = 30+5 =35

//Subtraction
// let age1 = 20;
// age1 -= 5; // age1 = 20 - 5 = 15

 
//Multiplication
// let age1 = 20;
// age1 *= 5 // 100

//Division
// let age1 = 20;
// age1 /= 20; //age1 = 20/20 = 1 Quotient

//Modulus
// let age1 = 20;
// age1 %= 20; // age1 = 20 % 20 //0

//Power
// let age1 = 20;
// age1 **= 2; //age1 = 20**2 = 400
//  console.log(age1); 

//Relational Operator or Comparison Operator --------------------------

// console.log( 19 < 20); //Less than
// console.log( 70 > 50); // Grater than 

// console.log( 30 <= 40); //Lesser than or equal to
// console.log( 40 >= 40); //Greater than or equal to 

// console.log( 40 == 40); //Equal to
// console.log( 40 == '40'); //Equal to
// console.log( 40 === '40'); //Strice equal   

// console.log( 40 != 0); //not equal
// console.log(40 !== '40'); //stric not equal to

//Logical Operator --------------------------------------------------
//AND (&&)
/* cond1 cond2 Result
   true  true   true
   true  false  false
   false  true  false
   false  false  false
*/ 

// let age = 18;

// console.log(age >= 18 && age<=35 ); //true & true

// age = 14
// console.log(age >= 18 && age<=35 ); //false  & true //Short circuit evaluation false

// OR (||)

/* cond1 cond2 Result
   true  true   true
   true  false  true
   false  true  true
   false  false false
*/ 
// let pass_input = "12245";
// console.log(pass_input =="12245" || pass_input == "ds" ); // true || false

// pass_input = "ds";
// console.log(pass_input =="12245" || pass_input == "ds" ); // false || true

// let pass_input = "12245";
// let userName = "abc";
// console.log(userName=="abc" || pass_input=="12245"); // True || True


//Logical  Not (!)

// console.log( !(10>4));
// console.log(!false);

//Concatenate ---------------------------------------------------
// let str = "Hello ";
// let str1 = "DS";

// let output = console.log(str + str1);

// console.log( str + str1 +" "+ "Welcome to our website");

// Template string or Template Literal (``)
// let newStr = ` Javascript`;

// //String Interpolation to embed variable expression

// let newStr1 = `${newStr} is a Scripting language`;

// console.log(newStr1);

// let num = 5;
// let first = 1;
// console.log( num + "*" + first + "=" + (num*first)); //normal concatenate
// console.log(` ${num} * ${first} = ${num*first}`); // String Interpolation


//Data type conversion ------------------------------------------
// Types of Conversion
// Implicit type conversion
// Explicit type conversion

//Implicit
//String

// console.log(typeof("Hi" + 7));
// console.log("Hi" + true);
// console.log("Hi" + null);
// console.log("Hi" + undefined);
// console.log("Hi" + [9]);
// console.log("Hi" + {});

//String + anything == anything + String

//Number
// console.log( 3 + true);
// console.log( 3 + null);
// console.log( 3 + undefined);
// console.log( 3 + [4]);
// console.log( 3 + {});
// console.log( 3 + "FD");

//Boolean
// console.log(10+true);
// console.log(true + undefined);
// console.log(true + null);

//Explicit Conversion

// console.log( 10 + Number(10));
// console.log( Number(""));
// console.log( Number("abc"));
// console.log( Number(false));
// console.log( Number(undefined));
// console.log( Number(null));
// console.log( Number( [2,9]));
// console.log( Number({}));

// console.log( Boolean(""));
// console.log( Boolean(8));
// console.log( Boolean(undefined));
// console.log( Boolean(null));
// console.log( Boolean([9,9]));
// console.log( Boolean({}));
// console.log( Boolean(Infinity));


















