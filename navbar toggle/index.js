let navbar = document.querySelector(".navbar")
let dropdown = document.querySelector(".dropdown")
let navToggle = document.querySelector(".nav-toggle")


navToggle.addEventListener("click", function() {
    /*if (dropdown.classList.contains("show-dropdown")) {
        navbar.className = "navbar"
        dropdown.className = "dropdown"
    }
    else {
        navbar.className = "navbar show-dropdown"
        dropdown.className = "dropdown show-dropdown"
    }*/
    dropdown.classList.toggle("show-dropdown")
    navbar.classList.toggle("nav-dropdown")
})