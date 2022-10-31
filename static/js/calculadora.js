(() => {
    const calculadora = document.getElementById("calculadora")
    console.log("hola mundo");
    let current = 1

    const progres_items = calculadora.querySelector(".progres-items")
    const progres_bar = calculadora.querySelector("progress")
    const steps_form = calculadora.querySelector(".steps-form")
    const widthSlider = steps_form.children[0].offsetWidth
    /* pasos */
    const handleStep = (bool) => {
        if (bool == true) {
            steps_form.scrollLeft += widthSlider * 1
            progres_items.children[current].classList.add("active")
            progres_bar.value += 33

            current++

        } else if (bool == false) {
            steps_form.scrollLeft -= widthSlider
            current = current - 1
            progres_items.children[current].className = "progres-item"
            progres_bar.value -= 33
        }
    }

    const btn_control = calculadora.querySelector(".controls")
    // previus
    btn_control.children[0].onclick = () => handleStep(false)
    // next
    btn_control.children[1].onclick = () => handleStep(true)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    calculadora.onsubmit = (e) => handleSubmit(e)

    // state
    const personas = [
        {
            tipo:"Adultos",
            cantidad:8,
            porcion:500,
        },
        {
            tipo:"Niños",
            cantidad:8,
            porcion:250,
        },
    ]


    // steps
    const step_personas = document.getElementById("step_1")


})();
