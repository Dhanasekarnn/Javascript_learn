// let person = {
//     pName : "Jhony",
//     age : 30
// }

//Object.create
// let newObj = Object.create(person)
// console.log(newObj.__proto__);
// console.log(newObj.age);
// newObj.location = "Selam"
// console.log(newObj);
// console.log(Object.getPrototypeOf(newObj));

//Object.assign

// let person1 = {
//     id : "eree32",
//     name1 : "Ds"
// }

// let newObj1 = Object.assign(person1, {role: "frontEnd Developer", salary: 50000})

// console.log(person1);
// console.log(newObj1);

//--------------------------------------------

//Object.entries
// let employee = {
//     eName : "Murugan",
//     eRole : "Back end Developer"
// }

// let multiArr = Object.entries(employee)
// console.log(multiArr);

//Object.fromEntries -----------------------------------------------

// let multiArr = Object.entries(employee)
// multiArr.push(["Name", "DS"])
// console.log(multiArr);

// let normalObj = Object.fromEntries(multiArr)
// console.log(normalObj);

//Object.keys -----------------------------------------------------

// let onlyKeys = Object.keys(normalObj)
// console.log(onlyKeys);

//Object.values [-----------------------------------------------------]

// let onlyValues = Object.values(normalObj)
// console.log(onlyValues);

//Object.freeze

// let newObjfreeze = {
//     id : 1
// }
// Object.freeze(newObjfreeze)
// newObjfreeze.name = "Ds"
// newObjfreeze.id = 4
// console.log(newObjfreeze);

// //Object.isFrozen

// console.log(Object.isFrozen(newObjfreeze));
