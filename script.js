const dropFirst = document.querySelector(".btn_dropfirst")
const down = document.querySelector(".drop_down")

const dropSecund = document.querySelector(".btn_dropsecund")
const company = document.querySelector(".drop_company")

const dropThird = document.querySelector(".btn_dropthird")
const connect = document.querySelector(".drop_connect")

dropFirst.addEventListener("click", () =>{
    down.classList.toggle("show")
})

dropSecund.addEventListener("click", () =>{
    company.classList.toggle("show")
    
})

dropThird.addEventListener("click", () =>{
    connect.classList.toggle("show")
    
})
