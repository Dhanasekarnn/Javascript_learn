// console.log(document.head);

let heading = document.getElementsByTagName("h1")
console.log(heading);

let para1 = document.getElementsByClassName("para1")
console.log(para1);

let unique = document.getElementById("uniq-para")
console.log(unique);

let nameAttri = document.getElementsByName("input-1")
console.log(nameAttri);


//--------------------------------------------------------------
let selectOne = document.querySelector("h1")
console.log(selectOne);

let selectOne1 = document.querySelector(".para1") //Class
console.log(selectOne1);

let selectOne2 = document.querySelector("#uniq-para") //ID
console.log(selectOne2);

//-----------------------------------------------------------

// let multiElements = document.querySelectorAll("h1")
// let multiElements = document.querySelectorAll(".para1")
let multiElements = document.querySelectorAll("#uniq-para")
console.log(multiElements);

//----------------------------------------------------
let newElement = document.createElement("h2")
newElement.innerText = "Manipulating Phase"
console.log(newElement);

document.body.append(newElement)
