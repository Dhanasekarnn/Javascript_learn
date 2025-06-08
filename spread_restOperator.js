//Spread Operator------------------------------

// let hobbies = ["Cricket", "Football", "BasketBall"]
// let hobbies1 = ["Reader", "Writer"]

//Normal ------------------
// let newArr = hobbies
// newArr[0] = "BaseBall"
// console.log(newArr, hobbies);

//Spread operator Method -----------------------
// let newArr = [...hobbies, ...hobbies1]
// newArr[0] = "BaseBall"
// console.log(newArr, hobbies);

// let newArr1 = [...newArr, "VideoCreator", "Content Writer"]
// console.log(newArr1);

//------------------------------------------------------
// let empDetail = {
//     empId : "IQR123",
//     empName : "Ds",
//     empRole : "React Developer"
// }

// let team2 = {...empDetail, empsalary : 1000000, team2Desig : "Full stack Developer", empId: "JJJ567" }

// console.log(team2);

//Rest Operator or Rest Parameter  ------------------------------------

// function restParams(a,b,...arr){
//     console.log(a,b,arr);
// }

// restParams(1,2,3,4,5,6,7,8,9,10);

