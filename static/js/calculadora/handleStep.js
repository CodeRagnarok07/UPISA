(() => {
    let current = 1

    const progres_items = calculadora.querySelector(".progres-items")
    const progres_bar = calculadora.querySelector("progress")
    const steps_form = calculadora.querySelector(".steps-form")
    const widthSlider = steps_form.children[0].offsetWidth


    /* pasos */
    const btn_control = calculadora.querySelector(".controls")
    const handleStep = (bool) => {

        if (bool == true) {
            steps_form.scrollLeft += widthSlider * 1
            progres_items.children[current].classList.add("active")
            progres_bar.value += 33

            current++

        } else if (bool == false && current > 1) {
            steps_form.scrollLeft -= widthSlider
            current = current - 1
            progres_items.children[current].className = "progres-item"
            progres_bar.value -= 33
        }


        if (current > 1) { // muestra o oculta el previus
            btn_control.children[0].classList.remove("invisible")
        } else if (current == 1) { // muestra prevuis
            btn_control.children[0].classList.add("invisible")
        }
        if (current == 4) { // ultimo paso
            btn_control.children[1].classList.add("hidden")
            btn_control.children[2].classList.remove("hidden")
        }
        if (current == 3) { // devolver ultimo paso
            btn_control.children[1].classList.remove("hidden")
            btn_control.children[2].classList.add("hidden")
        }
    }

    btn_control.children[0].onclick = () => handleStep(false)
    btn_control.children[1].onclick = () => handleStep(true)
})()