//  Carrusel Slider with controls
(() => {
    const all_carrusel_slider = document.getElementsByClassName("carrusel-slider")
    for (const carrusel_slider of all_carrusel_slider) {

        //  Select chidrem items and width
        const slider = carrusel_slider.getElementsByClassName("slider")[0]

        let current = 0


        /* ReRenders */

        // current count 
        const renderCurretn = () => {
            const cont_container = carrusel_slider.getElementsByClassName("render-cont")[0]
            if (cont_container) {
                cont_container.textContent = current + 1
            }
        }

        // dot style
        function setDoct() {
            console.log(current);
            for (let dot of dot_control_cont.children) {
                dot.className = ""
            }
            dot_control_cont.children[current].classList.add("active")
            renderCurretn()
        }



        // arrow_controls
        function arrowControler(bol) {
            const widthSlider = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / widthSlider

            const nextwidthSlider  = widthSlider * cols

            console.log(nextwidthSlider);


            setTimeout(() => {

                if (bol == true) {
                    current++
                    if (current >= slider.children.length / cols) {
                        slider.scrollLeft = 0
                        current = 0
                        setDoct()

                    } else {
                        slider.scrollLeft += nextwidthSlider
                        setDoct()

                    }
                } else {
                    if (current < 1) {
                        slider.scrollLeft = slider.children.length * nextwidthSlider
                        current =  Math.round( slider.children.length / cols) - 1

                        setDoct()

                    } else {
                        slider.scrollLeft -= nextwidthSlider
                        current = current - 1
                        setDoct()

                    }
                }
            }, 500);
            renderCurretn()

        }
        const right_control = carrusel_slider.getElementsByClassName("right-control")[0]
        const left_control = carrusel_slider.getElementsByClassName("left-control")[0]

        if (right_control) {
            right_control.onclick = () => arrowControler(true)
        }
        if (left_control) {
            left_control.onclick = () => arrowControler(false)
        }


        // Dot Control
        const dot_control_cont = carrusel_slider.getElementsByClassName("dot-control")[0]

        function indexControler(e, i) {
            const widthSlider = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / widthSlider
            console.log(widthSlider);
            slider.scrollLeft = widthSlider * i * cols
            current = i
            setDoct()
        }

        let widthSlider = slider.children[0].offsetWidth

        let cols = slider.offsetWidth / widthSlider

        let items_number = slider.children.length / cols
        for (let index = 0; index < items_number; index++) {
            // const element = slider.children[index];
            const dot_control = document.createElement("div")
            dot_control.onclick = (e) => indexControler(e, index)
            dot_control_cont.appendChild(dot_control)
            // console.log(dot_control_cont, dot_control);
        }
        dot_control_cont.children[0].classList.add("active")
        renderCurretn()
    }
})();
