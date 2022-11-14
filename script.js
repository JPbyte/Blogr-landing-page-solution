const dropFirst = document.querySelector(".btn_dropfirst")
const down = document.querySelector(".drop_down")

const dropSecund = document.querySelector(".btn_dropsecund")
const company = document.querySelector(".drop_company")

const dropThird = document.querySelector(".btn_dropthird")
const connect = document.querySelector(".drop_connect")

const arrowOne = document.querySelector(".arrow_one")
const arrowTwo= document.querySelector(".arrow_two")
const arrowThree = document.querySelector(".arrow_three")

dropFirst.addEventListener("click", () =>{
    down.classList.toggle("show")
    arrowOne.classList.toggle("rotate")
})

dropSecund.addEventListener("click", () =>{
    company.classList.toggle("show")
    arrowTwo.classList.toggle("rotate")
})

dropThird.addEventListener("click", () =>{
    connect.classList.toggle("show")
    arrowThree.classList.toggle("rotate")
})

AOS.init({
    duration: 1000
});
