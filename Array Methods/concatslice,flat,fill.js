//Concat
//let newArray = array1.concat(array2, array3, ...);
//Example 1 combine two Arrays
// let fruites = ["apple", "banana"];
// let moreFruites = ["orange", "grape"];
// let allFruites = fruites.concat(moreFruites);
// console.log(allFruites);


//Example 2 Combine more than two
// let a = [1];
// let b = [2, 3];
// let c = [4, 5];
// let result = a.concat(b,c);
// console.log(result.concat(10,20,30));
// console.log(result);

//Slice Method ----------------------------------------
//slice() is used to copy a portion of an array into a new array, without modifying the original.
//array.slice(start,end);

//Example 1:
// let colors = ['red', 'green', 'blue', 'yellow'];
// let sliced = colors.slice(1, 3);
// console.log(sliced);

// //Example 2:
// let nums = [10, 20, 30, 40];
// let result = nums.slice(2)
// console.log(result);

// //Example 3: negative Index
// let fruits = ['apple', 'banana', 'mango', 'orange'];
// let lastTwo = fruits.slice(-2);
// console.log(lastTwo);

// -----------------------------------------------------

//Flat The flat() method flattens nested arrays—it removes nesting (sub-arrays) and returns a new, one-level array.
//array.flat(depth)

//🔍 Example 1: Flatten One Level

// let arr = [1,2,[3,4],5];
// let flatarr = arr.flat(); //default 1
// console.log(flatarr);

// //Example 2 : Flatten multiple levels
// let nested = [1, [2, [3, [4]]]];
// let flatOnce = nested.flat();
// let flatTwice = nested.flat(2);
// let fullyFlat = nested.flat(Infinity);

// console.log(flatOnce, flatTwice, fullyFlat);

// //Example 3: With Empty slots
// let holes = [1, 2, , 4];
// console.log(holes.flat());

//Fill method -----------------------------------------------
//The fill() method fills all or part of an array with a static value.
//array.fill(value, start, end)

//Example 1: Fill Entire Array
// let arr = [1,2,3,4];
// arr.fill(0);
// console.log(arr); // [0, 0, 0, 0]

//Example 2: Fill From Index

// let arr = [1,2,3,4,5];
// arr.fill("Ds", 3)
// console.log(arr); //[ 1, 2, 3, 'Ds', 'Ds' ]

//Example 3; Fill Range

// let arr = ['a', 'b', 'c', 'd'];
// arr.fill("Ds", 1, 3)
// console.log(arr);

//Example 4: Create new Filled Array

// let filledArray = new Array(5).fill(1);
// console.log(filledArray);

