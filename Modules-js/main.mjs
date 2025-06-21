// import { loginData } from "./loginPage.mjs";
import { loginData as newPerson} from "./loginPage.mjs"; //alias
// import  signUpData  from "./signUpPage.mjs";
import personObject from "./signUpPage.mjs"; //Default Export


function application(){
    // console.log(loginData);
    // console.log(signUpData);
    console.log(personObject);
    console.log(newPerson);
    
    
}

application()