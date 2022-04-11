const previousBtn = document.querySelector("#previous-btn")
const nextBtn = document.querySelector("#next-btn")
const randomBtn = document.querySelector("#random-btn")
const fullName = document.querySelector("#full-name")
const profilePicture = document.querySelector("#profile-picture")
const jobPosition = document.querySelector("#job-position")
const reviewText = document.querySelector("#review-text")
const profilePic = document.querySelector("#profile-pic")

const profilePictures = ["img/pic-1.jpeg", "img/pic-2.jpeg", "img/pic-3.jpg", "img/pic-4.jpg"]
const fullNames = ["Ian van Ingen", "Snoop dogg", "Wiz Khalifa", "Emily van Ingen"]
const jobPositions = ["Front-end Developer", "NFT scammer", "professional stoner", "Professional plaaggeest"]
let numOfPeople = fullNames.length
let arrayIndex = numOfPeople - 1
let index = 0
changeData(index)

previousBtn.addEventListener("click", function() {
    index--
    if (index <= 0) {
        index = arrayIndex
    }
    changeData(index)
})

nextBtn.addEventListener("click", function() {
    index++
    if (index >= arrayIndex) {
        index =0
    }
    changeData(index)
})

randomBtn.addEventListener("click", function() {
    index = Math.floor(Math.random() * numOfPeople)
    changeData()
})

function changeData(person) {
    fullName.innerText = fullNames[person]
    jobPosition.innerText =  jobPositions[person]
    reviewText.innerText =  createRandomString(50)
    profilePic.innerHTML = `<img src=${profilePictures[person]} alt="profile-picture" id="profile-picture">`
}

function createRandomString(string_length) {
    let randomString = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < string_length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return randomString
}