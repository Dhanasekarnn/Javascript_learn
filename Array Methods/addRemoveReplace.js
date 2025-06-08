//Array Methods

//Pop ------------------------------- Remove last element from an array
// let arr = [100,200,300,400,500]

// let popppedVal = arr.pop()

// console.log(popppedVal, arr);

//Push ----------------------- Add one or more element to the end of an array.

// let arr = [100,200,300,400,500]
// arr.push(900, 400, "ds")
// console.log(arr);

//Shift ---------------------- Remove first element from an array
// let arr = [100,200,300,400,500]
// arr.shift()
// console.log(arr);

//unshift() ----------------------- Add one or more elements to the beginning of an array.
// let arr = [100,200,300,400,500]
// arr.unshift(10,50)
// console.log(arr);

//splice() ---------------------Adds/removes/replaces elements at a specific index.

//Basic syntax
// Array.splic(start, deletecount, item1, item2, ...)

// start → The index (position) where to begin changes.
// deleteCount → How many elements to remove from the array.
// item1, item2, ... → (Optional) Elements to add at the start index.

// Only remove
// let colors = ["red","green","blue","yellow"]
// colors.splice(1,2) // start at index 1, remove 2 elements

// console.log(colors);

//Only Add
// let colors = ["red","yellow"]
// colors.splice(1,0,"green","orange")  // insert at index 1, remove 0
// console.log(colors);

//Remove & Add 
// let colors = ["red", "blue", "green"];
// colors.splice(1,2,"black","brown") // remove 2 at index 1, add 'yellow'
// console.log(colors);