// let employee = {
//     eName : "Dhanasekar",
//     eSalary : 15000,
//     introYourSelf : function(a,b){
//         console.log(a+b+this.eName);
//     }
// }

// console.log(employee.eName);
// employee.introYourSelf(10,30);
//---------------------------------------------------
// eName = "DS"
// let employee1 = {
//     eName : "Dhanasekar",
//     eSalary : 15000,
//     introYourSelf :(a,b)=>{
//         console.log(a+b+this.eName); //arrow function focus this on global value
//     }
// }

// console.log(employee1.eName);
// employee1.introYourSelf(10,30);

//----------------------------------------------------------
// let person = {
//     pFName : "Gopal",
//     pLName : "Krishnan",
// }

// let person1 = {
//     pID : "abdd546",
//     pFName : "this is",
//     pLName : "Krishnan",
//     introYourSelf : function(a,b){
//         console.log(this.pFName + this.pLName + (a + b));
//         return (a+b);
//     }
// }

// person1.introYourSelf.call(person, 5, 6)

// person1.introYourSelf.apply(person, [100, 200]) //Apply to give array on argument

// let newFun = person1.introYourSelf.bind(person,10,20)
// console.log(newFun());
