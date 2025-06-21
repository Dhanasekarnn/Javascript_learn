// let newPromise = new Promise((resolve, reject)=>{
//     let dataReceived = false;
//     if(dataReceived){
//         resolve("Data Received")
//     }else{
//         reject("Data Not Received")
//     }
// })

// newPromise.then(console.log
// ).catch(console.log
// )

// newPromise.then((messege)=>{
//     console.log("Success :" + messege);
// }).catch((error)=>{
//     console.log("Error :" + error);
// }).finally(()=>{
//     console.log("End");
// })

//-------------------------------------------------

// function fetchProfile(sucessCallback, errorCallback){
//     let dataReceived = true;
//     if(dataReceived){
//         sucessCallback("Data Received")
//     }else{
//         errorCallback("Data Not Received")
//     }
// }

// fetchProfile(
    
//     (messege)=>{console.log(messege);
//         fetchProfile(
//             (nextmessege)=>{
//                 console.log("Next messege" + nextmessege);
//             },(nexterror)=>{
//                 console.log(nexterror);
                
//             }
//         )
// },

// (error)=>{console.log(error);
// })

