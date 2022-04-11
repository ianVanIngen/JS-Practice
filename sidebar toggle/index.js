let sidebar = document.querySelector(".sidebar")
let exitBtn = document.querySelector(".exit-btn")
let toggleBtn = document.querySelector(".toggle-btn")

exitBtn.addEventListener("click", function() {
    sidebar.classList.remove("show")
})

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show")
})