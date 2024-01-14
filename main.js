const lgImg = document.getElementById("image")
const ct = document.querySelector(".container")
function phone(phone){
lgImg.src = phone;
}
function color(color){
ct.style.background=color;
}
const menu = document.querySelector(".list")
function toggle(){
    menu.classList.toggle("open")
   
}

let btn = document.querySelector(".txt a")
btn.addEventListener("click" , ()=>{
    btn.classList.add("clicked")
})