import Form from './Form'
const Calculadora = () => {
    return (

        <div class="relative z-20 bg-cover bg-[url('assets/banner/calculadoraBG.png')] py-12  ">
            <div class="progres-form cont  bg-white bg-opacity-90 flex flex-col lg:flex-row rounded-xl ">

                <div class="bg-texture-rounded w-full text-black text-upercase font-extrabold  flex flex-col justify-center items-center ">
                    <h1 className="text-7xl uppercase">
                        calculadora <br />
                        de asados
                    </h1>
                </div>

                <div className="p-4 lg:p-9">

                    <Form />
                </div>


            </div>
        </div>

    )
}

export default Calculadora