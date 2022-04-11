let colorEl = document.querySelector("#color-el")
let clickBtn = document.querySelector("#click-btn")

clickBtn.addEventListener("click", function() {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    document.querySelector("#body").style.backgroundColor = randomColor
    colorEl.innerText = `Background color: ${randomColor}`
})