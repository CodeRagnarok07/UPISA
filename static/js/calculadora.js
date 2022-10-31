(() => {
    const calculadora = document.getElementById("calculadora")
    let current = 1

    const progres_items = calculadora.querySelector(".progres-items")
    const progres_bar = calculadora.querySelector("progress")
    const steps_form = calculadora.querySelector(".steps-form")
    const widthSlider = steps_form.children[0].offsetWidth


    const btn_control = calculadora.querySelector(".controls")

    /* pasos */
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
            console.log("ultimo");
            btn_control.children[1].classList.add("hidden")
            btn_control.children[2].classList.remove("hidden")
        }
        if (current == 3) { // devolver ultimo paso
            console.log("ultimo");
            btn_control.children[1].classList.remove("hidden")
            btn_control.children[2].classList.add("hidden")
        }
    }

    btn_control.children[0].onclick = () => handleStep(false)
    btn_control.children[1].onclick = () => handleStep(true)


    const createImg = (node) => {
        const { body } = document

        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = canvas.height = 100

        const tempImg = document.createElement('img')


        tempImg.addEventListener('load', onTempImageLoad)
        const xtmlImg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
        
  ${node}


        </div>
        
        </foreignObject></svg>`

        tempImg.src = 'data:image/svg+xml,' + encodeURIComponent(xtmlImg)
        const targetImg = document.createElement('img')
        body.appendChild(targetImg)

        function onTempImageLoad(e) {
            ctx.drawImage(e.target, 0, 0)
            targetImg.src = canvas.toDataURL()
            console.log(tempImg.src);

        }

    }

    const createimg = document.getElementById("createimg")
    const result_calculadora = document.getElementById("result_calculadora")

    var yourString = new XMLSerializer().serializeToString(result_calculadora);


    createimg.onclick = () => createImg(result_calculadora.outerHTML)






    const handleSubmit = (e) => {
        console.log("hola mundo");
        e.preventDefault()
    }
    calculadora.onsubmit = (e) => handleSubmit(e)

    // state
    const personas = [
        {
            tipo: "Adultos",
            cantidad: 8,
            porcion: 500,
        },
        {
            tipo: "Niños",
            cantidad: 8,
            porcion: 250,
        },
    ]


    // steps
    const step_personas = document.getElementById("step_1")


})();
