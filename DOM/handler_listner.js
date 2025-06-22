// let button1 = document.getElementById("listener")

// button1.addEventListener("click", function(){
//     console.log("First Listener");
// })
// button1.addEventListener("click", function(){
//     console.log("Second Listener");
// })

// //-----------------------------------------------------

// let button2 = document.getElementById("handler")
// button2.onclick = function(){
//     console.log("First handler");
// }
// button2.onclick = function(){
//     console.log("Second handler");
// }

let image = document.querySelector("img")
let para = document.querySelector("p")

image.addEventListener("mouseover", function(){
    image.src = "https://images.pexels.com/photos/248339/pexels-photo-248339.jpeg?cs=srgb&dl=nature-leaf-insect-248339.jpg&fm=jpg"
    para.innerText="I'm a adult butterfly"
})
image.addEventListener("mouseout", function(){
    image.src = "https://th.bing.com/th/id/R.6852d3cc6472053e97ad3bcb1e8846fb?rik=A8FxrG1pubLuWQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9400000%2fBeautiful-Butterflies-butterflies-9481976-1600-1200.jpg&ehk=1BTVIterwpevAc2JXj2bQV%2by8DFFlnwgUbL2h%2fP0a1E%3d&risl=&pid=ImgRaw&r=0"
    para.innerText="I'm a butterfly"
})