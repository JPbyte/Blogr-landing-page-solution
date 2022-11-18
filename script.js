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
    company.classList.remove("show")
    connect.classList.remove("show")
})

dropSecund.addEventListener("click", () => {
    company.classList.toggle("show")
    arrowTwo.classList.toggle("rotate")
    down.classList.remove("show")
    connect.classList.remove("show")
})

dropThird.addEventListener("click", () => {
    connect.classList.toggle("show")
    arrowThree.classList.toggle("rotate")
    down.classList.remove("show")
    company.classList.remove("show")
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

//variables

const productDrop = document.querySelector(".product_drop")
const productArrow = document.querySelector(".product_arrow")

const companyDrop = document.querySelector(".company_drop")
const companyArrow = document.querySelector(".company_arrow")

const connectDrop = document.querySelector(".connect_drop")
const connectArrow = document.querySelector(".connect_arrow")

const dropDrop = document.querySelectorAll(".drop_drop")

productDrop.addEventListener("click", () => {

    dropDrop[0].style.display = "flex"
    dropDrop[1].style.display = "none"
    dropDrop[2].style.display = "none"
    productArrow.style.transform = "rotate(180deg)"
    productArrow.style.transition = "0.4s"
    companyArrow.style.transform = "rotate(0deg)"
    companyArrow.style.transition = "0.4s"
    connectArrow.style.transform = "rotate(0deg)"
    connectArrow.style.transition = "0.4s"
})
companyDrop.addEventListener("click", () => {
    
    dropDrop[1].style.display = "flex"
    dropDrop[0].style.display = "none"
    dropDrop[2].style.display = "none"
    companyArrow.style.transform = "rotate(180deg)"
    companyArrow.style.transition = "0.4s"
    productArrow.style.transform = "rotate(0deg)"
    productArrow.style.transition = "0.4s"
    connectArrow.style.transform = "rotate(0deg)"
    connectArrow.style.transition = "0.4s"
})

connectDrop.addEventListener("click", () => {
    
    dropDrop[2].style.display = "flex"
    dropDrop[0].style.display = "none"
    dropDrop[1].style.display = "none"
    connectArrow.style.transform = "rotate(180deg)"
    connectArrow.style.transition = "0.4s"
    companyArrow.style.transform = "rotate(0deg)"
    companyArrow.style.transition = "0.4s"
    productArrow.style.transform = "rotate(0deg)"
    productArrow.style.transition = "0.4s"
})




closed.addEventListener("click", () =>{
    
    dropDrop[0].style.display = "none"
    dropDrop[1].style.display = "none"
    dropDrop[2].style.display = "none"

})