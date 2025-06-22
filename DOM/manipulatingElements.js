function manipulateElements(){
    // let newListElement = document.createElement("li")
    // newListElement.innerText = "<a>Link</a> Item-5"
    // newListElement.innerHTML = "<a>Link</a> Item-5"
    // newListElement.textContent = "<a>Link</a> Item-5"
    // console.log(newListElement);

    //-----------------------------------

    let newListElement = document.createElement("li")
    let input = document.querySelector("input")
    newListElement.innerHTML = input.value
    let orderList = document.querySelector("ol")
    // orderList.append(newListElement) // Text and Element  
    // orderList.appendChild(newListElement)   //Element only 
    // orderList.insertBefore(newListElement, orderList.children[2])
    // orderList.replaceChild(newListElement, orderList.children[0])
    // orderList.removeChild(orderList.children[0])
    // orderList.remove()
    
    //Dynamic Cascading
    newListElement.style.color = "white"
    newListElement.style.boxShadow = "3px 3px 5px white"
    orderList.prepend(newListElement)
}