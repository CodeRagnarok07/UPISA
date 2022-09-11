
const $ = (obj)=> document.querySelector(obj)


const toggle = (e) => {
    const modal = e.querySelector(".modal")
    const togle_icon = e.querySelector(".togle_icon")
    modal.classList.toggle("hidden")        
    togle_icon.children[0].classList.toggle("hidden")
    togle_icon.children[1].classList.toggle("hidden")
}