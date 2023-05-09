import React from 'react'

export default function HomeCarrusel() {

    const carruselContent = {
        title: "ÚNICA Y EXQUISITA",
        sub: "tan real como vos"

    }

    return (
        <>

            <div className={"carrusel"}>

                {carruselContent &&

                    <div className={"carrusel_description"}>
                        <h1>{carruselContent.title}</h1>
                        <h1 className={"kalamaya"}>{carruselContent.sub}</h1>
                    </div>
                }

                <img src="/static/img/lp-carrusel/1.png" alt="" />
            </div>

            <div className="space"/>
        </>
    )
}
