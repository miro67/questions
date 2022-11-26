

const shoo = document.querySelectorAll(".question")

shoo.forEach((shoos)=>{
    shoos.addEventListener("click",(e)=>{
        e.currentTarget.classList.toggle("show-text")
    })
})