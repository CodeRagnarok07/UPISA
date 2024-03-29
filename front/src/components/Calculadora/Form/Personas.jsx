const personas = ({ state, setState, text }) => {


    // onclick="this.nextElementSibling.stepDown()"
    // this.previousElementSibling.disabled 




    const handleClick = (value, bold) => {
        const nameState = value[0]
        const obj = state.personas
        if (bold) obj[nameState].cantidad += 1; else obj[nameState].cantidad -= 1
        setState({ ...state, personas: obj })
    }

    const handleDisable = (e) => {
        const input = e.currentTarget.previousElementSibling
        input.disabled = !input.disabled
        input.focus()
    }

    const handleChange = (value, input) => {
        const nameState = value[0]
        const obj = state.personas
        obj[nameState].porcion = input.currentTarget.value

        setState({ ...state, personas: obj })
    }

    console.log(text);

    return (
        <div id="step_1" className="flex flex-col gap-y-6">
            <div class="flex justify-between mb-10">
                <h4>{text.cant[0]}</h4>
                <h4>{text.cant[1]}</h4>
            </div>

            {Object.entries(state.personas).map((v, k) => (

                <div key={k} className="flex w-full justify-between  items-center  gap-x-8 gap-y-4">


                    <div className="mr-auto flex flex-wrap items-center xl:flex-nowrap justify-start gap-5 w-full ">

                        <span className="uppercase font-bold min-w-[78px]  ">
                            {text.personas[k]}
                        </span>

                        {/* CANTIDAD  */}
                        <div class="flex items-center gap-1 lg:gap-4" >
                            <div onClick={(e) => handleClick(v, false)}
                                // onClick={e=>console.log( e.currentTarget.nextElementSibling)}
                                class="p-1 sm:p-2 cursor-pointer  bg-primary rounded-full" >
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375Z" fill="white" />
                                </svg>
                            </div>
                            <div className="border border-[#FAE0C9] bg-white flex h-full rounded-lg w-min">
                                <input
                                    readOnly={true}
                                    disabled={false}
                                    name="porcion"
                                    value={v[1].cantidad}
                                    type="number"
                                    className="noarrow w-8 sm:w-12" />
                            </div>
                            <div onClick={(e) => handleClick(v, true)}
                                class="p-1 sm:p-2 cursor-pointer  bg-primary rounded-full" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="white" />
                                </svg>
                            </div>

                        </div>
                    </div>


                    {/* PORCION */}

                    <div class=" border bg-white border-[#FAE0C9] 
                        
                        flex items-center justify-center rounded-lg"

                    >
                        <input
                            name="porcion"
                            disabled={true}
                            onChange={(thi) => handleChange(v, thi)}
                            class="h-full w-8 sm:w-12 inline items-center noarrow"
                            value={v[1].porcion}
                            type="number"

                        />g

                        <label
                            onClick={(e) => handleDisable(e)}
                            class="h-full px-2 flex items-center cursor-pointer">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1641 3.33592L13.6641 0.83592C13.577 0.74852 13.4735 0.679173 13.3595 0.631855C13.2456 0.584538 13.1234 0.560181 13 0.560181C12.8766 0.560181 12.7544 0.584538 12.6405 0.631855C12.5265 0.679173 12.423 0.74852 12.3359 0.83592L4.83594 8.33592C4.7486 8.42295 4.67945 8.52648 4.63251 8.64048C4.58557 8.75449 4.56177 8.87669 4.5625 8.99998V11.5C4.5625 11.7486 4.66127 11.9871 4.83709 12.1629C5.0129 12.3387 5.25136 12.4375 5.5 12.4375H8C8.24837 12.4356 8.48637 12.3376 8.66406 12.164L16.1641 4.66405C16.2515 4.57695 16.3208 4.47345 16.3681 4.3595C16.4154 4.24555 16.4398 4.12337 16.4398 3.99998C16.4398 3.87659 16.4154 3.75442 16.3681 3.64047C16.3208 3.52651 16.2515 3.42302 16.1641 3.33592ZM13 2.82811L14.1719 3.99998L13.3125 4.85936L12.1406 3.68748L13 2.82811ZM7.60938 10.5625H6.4375V9.39061L10.8125 5.01561L11.9844 6.18748L7.60938 10.5625ZM15.8125 9.04686V15.25C15.8104 15.6638 15.6452 16.06 15.3526 16.3526C15.06 16.6451 14.6638 16.8104 14.25 16.8125H1.75C1.33623 16.8104 0.939996 16.6451 0.647415 16.3526C0.354833 16.06 0.189553 15.6638 0.1875 15.25V2.74998C0.189553 2.33621 0.354833 1.93998 0.647415 1.6474C0.939996 1.35482 1.33623 1.18954 1.75 1.18748H7.95312C8.20177 1.18748 8.44022 1.28625 8.61604 1.46207C8.79185 1.63789 8.89062 1.87634 8.89062 2.12498C8.89062 2.37362 8.79185 2.61208 8.61604 2.7879C8.44022 2.96371 8.20177 3.06248 7.95312 3.06248H2.0625V14.9375H13.9375V9.04686C13.9375 8.79822 14.0363 8.55976 14.2121 8.38394C14.3879 8.20813 14.6264 8.10936 14.875 8.10936C15.1236 8.10936 15.3621 8.20813 15.5379 8.38394C15.7137 8.55976 15.8125 8.79822 15.8125 9.04686Z" fill="#EA8215"></path>
                            </svg>
                        </label>
                    </div>


                </div>

            ))}



        </div>
    )
}

export default personas