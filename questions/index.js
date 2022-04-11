const btns = document.querySelectorAll(".open-btn")
const answerWrapper = document.querySelectorAll(".answer-wrapper")

console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("show")
    })
})