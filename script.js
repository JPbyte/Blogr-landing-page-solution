//variables for initial drop
const dropFirst = document.querySelector(".btn_dropfirst")
const down = document.querySelector(".drop_down")

const dropSecund = document.querySelector(".btn_dropsecund")
const company = document.querySelector(".drop_company")

const dropThird = document.querySelector(".btn_dropthird")
const connect = document.querySelector(".drop_connect")

const arrowOne = document.querySelector(".arrow_one")
const arrowTwo= document.querySelector(".arrow_two")
const arrowThree = document.querySelector(".arrow_three")

//functions
dropFirst.addEventListener("click", () => {
    down.classList.toggle("show")
    arrowOne.classList.toggle("rotate")
})

dropSecund.addEventListener("click", () => {
    company.classList.toggle("show")
    arrowTwo.classList.toggle("rotate")
})

dropThird.addEventListener("click", () => {
    connect.classList.toggle("show")
    arrowThree.classList.toggle("rotate")
})

//variables for dropdown mobile
const menu = document.querySelector("#menu_img")
const closed = document.querySelector("#close_img")
const dropDown = document.querySelector("#drop_down")

//functions
menu.addEventListener("click", () => {
    
    dropDown.style.display = "flex"
    closed.style.display = "flex"
    menu.style.display = "none"

})

closed.addEventListener("click", () => {
    
    dropDown.style.display = "none"
    closed.style.display = "none"
    menu.style.display = "flex"
})
