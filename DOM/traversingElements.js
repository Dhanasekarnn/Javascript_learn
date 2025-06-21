//Parent

function traversingParent(){
    let getParent = document.querySelector(".child1");

    console.log(getParent.parentElement);
    console.log(getParent.parentNode);

}

//Node --> Element Node, Text Node, Attribute Node

//Child
// function selectChild(){
//     let getElementsByClass = document.querySelector(".parent")
//     console.log(getElementsByClass.childElementCount);
//     console.log(getElementsByClass.childNodes);
//     console.log(getElementsByClass.children);
//     console.log(getElementsByClass.firstChild);
//     console.log(getElementsByClass.firstElementChild);
//     console.log(getElementsByClass.lastChild);
//     console.log(getElementsByClass.lastElementChild);
// }
// selectChild()

//Siblings
// function selectSiblings(){
//     let child1 = document.querySelector(".child1")
//     console.log(child1.nextSibling);
//     console.log(child1.nextElementSibling);
//     console.log(child1.previousSibling);
//     console.log(child1.previousElementSibling); 
// }

// selectSiblings()