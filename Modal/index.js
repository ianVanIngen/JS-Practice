let openBtn = document.querySelector("#open-btn")
let containerWrapper = document.querySelector(".container-wrapper")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector("#close-btn")


openBtn.addEventListener("click", () =>{
    modal.classList.toggle("show")
    containerWrapper.classList.toggle("show")
})

closeBtn.addEventListener("click", () =>{
    modal.classList.toggle("show")
    containerWrapper.classList.toggle("show")
})
