import { useEffect, useMemo, useRef, useState } from 'react';

const useCarrusel = () => {
    const CarruselRef = useRef()
    const dotControlerRef = useRef()




    const [current, setCurrent] = useState(0)
    const Current = {
        state: current,
        setCurrent: setCurrent
    }

    function arrowControler(bol) {
        const slider = CarruselRef.current

            const widthSlider = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / widthSlider
            const nextwidthSlider = widthSlider * cols
            setCurrent(current + 1)
            if (bol == true) {
                if (current + 1 >= Math.round(slider.children.length / cols)) {
                    slider.scrollLeft = 0
                    setCurrent(0)
                } else {
                    slider.scrollLeft += nextwidthSlider
                }
            } else {
                if (current < 1) {
                    slider.scrollLeft = slider.children.length * nextwidthSlider
                    setCurrent(Math.round(slider.children.length / cols) - 1)
                } else {
                    slider.scrollLeft -= nextwidthSlider
                    setCurrent(current - 1)


                }
            }

    }




    useEffect(() => {
        if (CarruselRef.current.children[0]) {

            const slider = CarruselRef.current
            const widthSlider = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / widthSlider
            const n_childs = CarruselRef.current.children.length / cols


            function indexControler(e, i) {
                slider.scrollLeft = widthSlider * i * cols
                const oldActive = dotControlerRef.current.querySelector(".active")
                if (oldActive) {
                    oldActive.className = ""
                }
                // console.log(dotControlerRef.current.getElementsByClassName("active"));
                e.className = "active"

            }


            if (dotControlerRef.current && dotControlerRef.current.children[0]) {
                const firstChild = dotControlerRef.current.children[0]
                if (firstChild) dotControlerRef.current.innerHTML = firstChild.outerHTML

                for (let index = 0; index < n_childs; index++) {
                    if (slider.children[index].src) {
                        const newChild = document.createElement("img")
                        newChild.src = slider.children[index].src
                        newChild.onclick = (e) => indexControler(e.target, index);

                        dotControlerRef.current.appendChild(newChild)


                    } else {

                        const newChild = firstChild.cloneNode()
                        newChild.onclick = (e) => indexControler(e.target, index);
                        dotControlerRef.current.appendChild(newChild)
                    }

                }

                dotControlerRef.current.removeChild(dotControlerRef.current.children[0])


            }
        }

    }, [dotControlerRef.current])


    return [CarruselRef, arrowControler, Current, dotControlerRef]

}

export default useCarrusel