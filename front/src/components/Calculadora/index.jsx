import Form from './Form'

import texts from 'src/locale/calculadora.json'



const Calculadora = () => {

    const text = texts[localStorage.userlang]

    return (

        <div class="relative z-20 bg-cover bg-[url('src/assets/banner/calculadoraBG.png')] py-12  ">
            <div class="progres-form cont  
            bg-white bg-opacity-90 
             rounded-xl
             grid grid-cols-1 xl:grid-cols-2
            
            ">

                <div class="bg-texture-rounded w-full min-h-[20rem] text-black text-upercase font-extrabold  flex flex-col justify-center items-center ">
                    <h1 className="text-5xl 2xl:text-7xl uppercase">
                        {text.title[0]} <br />
                        {text.title[1]} 
                    </h1>
                </div>

                <div className="p-8 lg:p-9 w-full h-full">

                    <Form text={text}/>
                </div>


            </div>
        </div>

    )
}

export default Calculadora