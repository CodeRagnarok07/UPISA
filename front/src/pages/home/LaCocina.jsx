

const LaCocina = () => {

    const source = [
        {
            desktop: "assets/homeCarrusel/banner-desktop.png",
            movil: "assets/homeCarrusel/banner-movil.png",
        },

    ]

    return (
        <div className="cont my-20">

            <div className="text-center">
                <h2 className="uppercase ">LA cocina de UPISA</h2>
                <p className="">
                    Anímate a probar todo lo que podés hacer con estas recetas sencillas y sabrosas.
                </p>
            </div>



            <div className="carrusel-slider my-8  min-h-[25rem]">
                <div className="slider relative     ">


                    {/* SLIDER */}
                    <div className="item-slider ">

                        <div className="
                h-full w-full
                flex flex-col lg:flex-row lg:items-center">

                            <div className="
                    w-full z-10 -mb-2
                    lg:m-0 lg:w-4/5 
                    ">
                                <img className="w-full h-full object-contain rounded-t-2xl lg:rounded-2xl" 
                                src="assets/homeCarrusel/banner-movil.png"
                                    alt="" />
                            </div>


                            <div className="bg-white rounded-lg  text-black p-5 h-min lg:-ml-[6%] lg:z-20 ">
                                <h3 className="uppercase"> nombre receta</h3>

                                <p className="mb-5">Se puede servir como entrada o plato principal.</p>

                                <div className="flex gap-6 mb-6 ">

                                    <div className="flex-center gap-[10px]">
                                        <i>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9 0.5625C7.33122 0.5625 5.69992 1.05735 4.31238 1.98448C2.92484 2.9116 1.84338 4.22936 1.20477 5.77111C0.566156 7.31286 0.399065 9.00936 0.724628 10.6461C1.05019 12.2828 1.85379 13.7862 3.03379 14.9662C4.2138 16.1462 5.71721 16.9498 7.35393 17.2754C8.99064 17.6009 10.6871 17.4338 12.2289 16.7952C13.7706 16.1566 15.0884 15.0752 16.0155 13.6876C16.9427 12.3001 17.4375 10.6688 17.4375 9C17.4354 6.76287 16.5458 4.61796 14.9639 3.03607C13.382 1.45418 11.2371 0.564569 9 0.5625ZM9 15.5625C7.70206 15.5625 6.43327 15.1776 5.35407 14.4565C4.27488 13.7354 3.43374 12.7105 2.93704 11.5114C2.44034 10.3122 2.31038 8.99272 2.5636 7.71972C2.81682 6.44672 3.44183 5.27739 4.35962 4.35961C5.2774 3.44183 6.44672 2.81681 7.71972 2.5636C8.99272 2.31038 10.3122 2.44034 11.5114 2.93704C12.7105 3.43374 13.7354 4.27487 14.4565 5.35407C15.1776 6.43327 15.5625 7.70206 15.5625 9C15.5604 10.7398 14.8684 12.4078 13.6381 13.6381C12.4078 14.8684 10.7399 15.5604 9 15.5625ZM14.3125 9C14.3125 9.24864 14.2137 9.4871 14.0379 9.66291C13.8621 9.83873 13.6236 9.9375 13.375 9.9375H9C8.75136 9.9375 8.51291 9.83873 8.33709 9.66291C8.16128 9.4871 8.0625 9.24864 8.0625 9V4.625C8.0625 4.37636 8.16128 4.1379 8.33709 3.96209C8.51291 3.78627 8.75136 3.6875 9 3.6875C9.24864 3.6875 9.4871 3.78627 9.66292 3.96209C9.83873 4.1379 9.9375 4.37636 9.9375 4.625V8.0625H13.375C13.6236 8.0625 13.8621 8.16127 14.0379 8.33709C14.2137 8.5129 14.3125 8.75136 14.3125 9Z"
                                                    fill="#0B9839" />
                                            </svg>
                                        </i>
                                        <p className="">30 min</p>
                                    </div>

                                    <div className="flex-center gap-[10px]">
                                        <i>
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.3902 15.4062C16.2944 13.5169 14.5933 12.0526 12.562 11.25C13.559 10.5023 14.2954 9.45986 14.667 8.27037C15.0385 7.08088 15.0264 5.80463 14.6324 4.6224C14.2383 3.44017 13.4822 2.4119 12.4713 1.68325C11.4603 0.954597 10.2457 0.5625 8.99955 0.5625C7.75337 0.5625 6.53878 0.954597 5.52783 1.68325C4.51688 2.4119 3.76082 3.44017 3.36674 4.6224C2.97266 5.80463 2.96055 7.08088 3.33212 8.27037C3.70369 9.45986 4.4401 10.5023 5.43705 11.25C3.40577 12.0526 1.70467 13.5169 0.608922 15.4062C0.484601 15.6217 0.450975 15.8778 0.515441 16.1181C0.579907 16.3583 0.737183 16.5632 0.952672 16.6875C1.16816 16.8118 1.42421 16.8454 1.66449 16.781C1.90477 16.7165 2.1096 16.5592 2.23392 16.3438C2.91964 15.1562 3.90586 14.17 5.09347 13.4844C6.28108 12.7988 7.62823 12.4378 8.99955 12.4378C10.3709 12.4378 11.718 12.7988 12.9056 13.4844C14.0932 14.17 15.0795 15.1562 15.7652 16.3438C15.8481 16.4858 15.9667 16.6038 16.1092 16.686C16.2517 16.7682 16.4132 16.8118 16.5777 16.8125C16.7423 16.8138 16.9043 16.7706 17.0464 16.6875C17.1532 16.626 17.2468 16.544 17.3218 16.4464C17.3969 16.3487 17.4519 16.2371 17.4839 16.1181C17.5158 15.9991 17.5239 15.875 17.5079 15.7529C17.4918 15.6307 17.4518 15.5129 17.3902 15.4062ZM4.93705 6.5C4.93705 5.69651 5.17531 4.91107 5.6217 4.243C6.06809 3.57492 6.70257 3.05422 7.4449 2.74674C8.18722 2.43926 9.00405 2.35881 9.7921 2.51556C10.5801 2.67231 11.304 3.05923 11.8722 3.62738C12.4403 4.19553 12.8272 4.9194 12.984 5.70745C13.1407 6.49549 13.0603 7.31233 12.7528 8.05465C12.4453 8.79698 11.9246 9.43145 11.2566 9.87785C10.5885 10.3242 9.80303 10.5625 8.99955 10.5625C7.9221 10.5625 6.88879 10.1345 6.12693 9.37262C5.36506 8.61075 4.93705 7.57744 4.93705 6.5Z"
                                                    fill="#4688C3" />
                                            </svg>
                                        </i>
                                        <p className=""> 4 porciones por persona</p>
                                    </div>


                                </div>


                                <a href="{% url 'receta_detail' i.url %}" className="">
                                    <button className="secondary with_svg">
                                        VER RECETA

                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.999889 11.7498C0.801057 11.749 0.610427 11.6705 0.468638 11.5311C0.398718 11.4614 0.343241 11.3786 0.305387 11.2874C0.267533 11.1963 0.248047 11.0985 0.248047 10.9998C0.248047 10.9011 0.267533 10.8034 0.305387 10.7122C0.343241 10.6211 0.398718 10.5383 0.468638 10.4686L4.93739 5.99984L0.468638 1.53109C0.327742 1.39019 0.248588 1.19909 0.248588 0.999836C0.248588 0.901174 0.268021 0.803478 0.305777 0.712326C0.343533 0.621174 0.398874 0.538351 0.468638 0.468586C0.538403 0.398821 0.621226 0.343481 0.712378 0.305725C0.80353 0.267968 0.901226 0.248535 0.999889 0.248535C1.19915 0.248535 1.39024 0.32769 1.53114 0.468586L6.53114 5.46859C6.60106 5.53826 6.65654 5.62106 6.69439 5.71222C6.73224 5.80339 6.75173 5.90113 6.75173 5.99984C6.75173 6.09855 6.73224 6.19629 6.69439 6.28745C6.65654 6.37861 6.60106 6.46141 6.53114 6.53109L1.53114 11.5311C1.38935 11.6705 1.19872 11.749 0.999889 11.7498Z"
                                                fill="white" />
                                        </svg>

                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* SLIDER */}


                </div>
                <div className="">

                    <div className="controls-side ">
                       
                        <button className="left-control">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.375 8C19.375 8.29837 19.2565 8.58451 19.0455 8.79549C18.8345 9.00647 18.5484 9.125 18.25 9.125H4.46877L9.29689 13.9531C9.40177 14.0576 9.48499 14.1818 9.54177 14.3186C9.59855 14.4553 9.62778 14.6019 9.62778 14.75C9.62778 14.8981 9.59855 15.0447 9.54177 15.1814C9.48499 15.3182 9.40177 15.4424 9.29689 15.5469C9.0846 15.7564 8.79831 15.8739 8.50002 15.8739C8.20172 15.8739 7.91544 15.7564 7.70314 15.5469L0.953141 8.79687C0.848261 8.69236 0.765044 8.56816 0.708263 8.43142C0.651482 8.29467 0.622253 8.14806 0.622253 8C0.622253 7.85193 0.651482 7.70532 0.708263 7.56858C0.765044 7.43183 0.848261 7.30764 0.953141 7.20312L7.70314 0.453123C7.91448 0.241779 8.20113 0.123047 8.50002 0.123047C8.64801 0.123047 8.79455 0.152196 8.93128 0.208831C9.06801 0.265466 9.19224 0.348476 9.29689 0.453123C9.40154 0.557771 9.48455 0.682005 9.54118 0.818733C9.59782 0.955461 9.62697 1.10201 9.62697 1.25C9.62697 1.39799 9.59782 1.54454 9.54118 1.68126C9.48455 1.81799 9.40154 1.94223 9.29689 2.04687L4.46877 6.875H18.25C18.5484 6.875 18.8345 6.99353 19.0455 7.2045C19.2565 7.41548 19.375 7.70163 19.375 8Z"
                                    fill="white" />
                            </svg>
                        </button>

                        <div className="flex">
                            1/5
                        </div>

                        <button className="right-control">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.0469 8.79687L12.2969 15.5469C12.0846 15.7564 11.7983 15.8739 11.5 15.8739C11.2017 15.8739 10.9154 15.7564 10.7031 15.5469C10.5982 15.4424 10.515 15.3182 10.4582 15.1814C10.4015 15.0447 10.3722 14.8981 10.3722 14.75C10.3722 14.6019 10.4015 14.4553 10.4582 14.3186C10.515 14.1818 10.5982 14.0576 10.7031 13.9531L15.5312 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58451 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99352 1.45163 6.875 1.75 6.875H15.5312L10.7031 2.04687C10.4918 1.83553 10.373 1.54888 10.373 1.25C10.373 1.10201 10.4022 0.955461 10.4588 0.818733C10.5155 0.682005 10.5985 0.557771 10.7031 0.453123C10.8078 0.348476 10.932 0.265466 11.0687 0.208831C11.2055 0.152196 11.352 0.123047 11.5 0.123047C11.7989 0.123047 12.0855 0.241779 12.2969 0.453123L19.0469 7.20312C19.1518 7.30764 19.235 7.43183 19.2918 7.56858C19.3485 7.70532 19.3778 7.85193 19.3778 8C19.3778 8.14806 19.3485 8.29467 19.2918 8.43142C19.235 8.56816 19.1518 8.69236 19.0469 8.79687Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex lg:hidden justify-center">
                    <div className="dot-control dot-control-white  my-6 "></div>
                </div>


            </div>


            <div className="lg:mx-auto lg:flex justify-center">

                <a className="btn bg-success" href="#">
                    TODAS LAS RECETAS
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.999889 11.7501C0.801057 11.7492 0.610427 11.6707 0.468638 11.5313C0.398718 11.4617 0.343241 11.3789 0.305387 11.2877C0.267533 11.1965 0.248047 11.0988 0.248047 11.0001C0.248047 10.9014 0.267533 10.8036 0.305387 10.7125C0.343241 10.6213 0.398718 10.5385 0.468638 10.4688L4.93739 6.00008L0.468638 1.53133C0.327742 1.39043 0.248588 1.19934 0.248588 1.00008C0.248588 0.901418 0.268021 0.803722 0.305777 0.71257C0.343533 0.621418 0.398874 0.538595 0.468638 0.46883C0.538403 0.399066 0.621226 0.343725 0.712378 0.305969C0.80353 0.268212 0.901226 0.248779 0.999889 0.248779C1.19915 0.248779 1.39024 0.327934 1.53114 0.46883L6.53114 5.46883C6.60106 5.53851 6.65654 5.6213 6.69439 5.71247C6.73224 5.80363 6.75173 5.90137 6.75173 6.00008C6.75173 6.09879 6.73224 6.19653 6.69439 6.28769C6.65654 6.37886 6.60106 6.46165 6.53114 6.53133L1.53114 11.5313C1.38935 11.6707 1.19872 11.7492 0.999889 11.7501Z"
                            fill="white" />
                    </svg>
                </a>
            </div>

        </div>

    )
}

export default LaCocina