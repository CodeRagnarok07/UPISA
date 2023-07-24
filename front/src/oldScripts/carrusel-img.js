// Carrusel img-control
(() => {
    const carrusel = document.getElementsByClassName("carrusel")[0]
    const control_contain = document.createElement("div")
    control_contain.className = "control-contain"

    // Crear el controlador por imagenes
    if (carrusel != undefined) {
        if (carrusel.classList.contains("img-control")) {
            const control = document.createElement("div")
            control.className = "control"
            control_contain.appendChild(control)
            carrusel.appendChild(control_contain)
        }
        const main = carrusel.getElementsByClassName("main")[0]
        const control = carrusel.getElementsByClassName("control")[0]

        function handleClickControler(e) {
            var parent = e.parentNode;
            var index = Array.prototype.indexOf.call(parent.children, e);
            for (let i of main.children) {
                i.className = "hidden"
            }
            for (let i of control.children) {
                i.className = "opacity-50"
            }
            main.children[index].classList.toggle("hidden")
            control.children[index].classList.add("selected")
            control.children[index].classList.toggle("opacity-50")
        }


        for (const img_main of main.children) {
            const new_img = img_main.cloneNode()
            new_img.className = "opacity-50"
            new_img.onclick = (e) => handleClickControler(e.target)
            control.appendChild(new_img)
        }


        for (let i of main.children) {
            i.className = "hidden"
        }

        main.children[0].classList.toggle("hidden")
        control.children[0].className = "selected"


    }

})();