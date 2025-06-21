// fetch("https://fakestoreapi.com/users/2")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Data Not Found")
//         } else {
//             return response.json();
//         }
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })


//asyncAwait ------------------------------------------------------

// async function fetchData(){
//     try{
//         let response = await fetch("https://fakestoreapi.com/users")
//         if(!response.ok){
//             throw new Error("Data Not Found")
//         } else{
//              let data = await response.json()
//         console.log(data);
//         }  
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

// fetchData()
