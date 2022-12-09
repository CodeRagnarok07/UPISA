
const calculadora = document.getElementById("calculadora")

import "/static/js/calculadora/handleStep.js"


let state = {
    personas: [
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
    ],
    carnes: [
        {
            name: "Pierna con hueso",
            used: false,
            gpk: 100 
        },
        {
            name: "Paleta de cerdo",
            used: false,
            gpk: 100 
        },
        {
            name: "Lomito de cerdo",
            used: false,
            gpk: 100 
        },
        {
            name: "Trimming de cerdo",
            used: false,
            gpk: 100 
        },

    ],
    embutidos: [
        {
            name: "Chorizo Parrillero",
            used: false,
            gpk: 100 
        },
        {
            name: "Salchicha Upisa",
            used: false,
            gpk: 100 
        },
        {
            name: "Chorizo Prontas Toscana con ajo",
            used: false,
            gpk: 100 
        },

    ]

}


// STEP 1
const table_person = document.getElementById("table_person")
const reRenderAddPerson = () => {
    const person_detail = `   
    <tbody>
        ${state.personas.map((v, i) =>
        `
            <tr id="person_detail">
            <th>${v.tipo}</th>
            <th key=${i}>
                <label class="content_input_number_calculadora" for="input_number_calculadora">                                                    
                    <div onclick="this.nextElementSibling.stepDown()" class="cursor-pointer number_control">
                        <svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.875 1.9375H1.125C0.87636 1.9375 0.637903 1.83873 0.462087 1.66291C0.286272 1.4871 0.1875 1.24864 0.1875 1C0.1875 0.75136 0.286272 0.512903 0.462087 0.337087C0.637903 0.161272 0.87636 0.0625 1.125 0.0625H14.875C15.1236 0.0625 15.3621 0.161272 15.5379 0.337087C15.7137 0.512903 15.8125 0.75136 15.8125 1C15.8125 1.24864 15.7137 1.4871 15.5379 1.66291C15.3621 1.83873 15.1236 1.9375 14.875 1.9375Z"
                                fill="white" />
                        </svg>
                    </div>                                                
                    <input 
                    name="cantidad" 
                    value="${v.cantidad}" 
                    type="number"
                    id="input_cant_${i}" 
                    class="noarrow input_number_calculadora h-11 w-11"/>
                   

                    <div class="cursor-pointer number_control">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z"
                                fill="white" />
                        </svg>
                    </div>
                </label>
            </th>

            <th key=${i}>
                <div class="h-11 border border-[#FAE0C9]  flex items-center justify-end rounded-lg">                                            
                    <input name="porcion" disabled id="g_value" class="h-full w-max inline items-center" value="${v.porcion}" type="number"/>g
                    <lable for="g_value" onclick="{this.previousElementSibling.disabled = !this.previousElementSibling.disabled, this.previousElementSibling.focus() }" class="h-full px-2 flex-center cursor-pointer">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1641 3.33592L13.6641 0.83592C13.577 0.74852 13.4735 0.679173 13.3595 0.631855C13.2456 0.584538 13.1234 0.560181 13 0.560181C12.8766 0.560181 12.7544 0.584538 12.6405 0.631855C12.5265 0.679173 12.423 0.74852 12.3359 0.83592L4.83594 8.33592C4.7486 8.42295 4.67945 8.52648 4.63251 8.64048C4.58557 8.75449 4.56177 8.87669 4.5625 8.99998V11.5C4.5625 11.7486 4.66127 11.9871 4.83709 12.1629C5.0129 12.3387 5.25136 12.4375 5.5 12.4375H8C8.24837 12.4356 8.48637 12.3376 8.66406 12.164L16.1641 4.66405C16.2515 4.57695 16.3208 4.47345 16.3681 4.3595C16.4154 4.24555 16.4398 4.12337 16.4398 3.99998C16.4398 3.87659 16.4154 3.75442 16.3681 3.64047C16.3208 3.52651 16.2515 3.42302 16.1641 3.33592ZM13 2.82811L14.1719 3.99998L13.3125 4.85936L12.1406 3.68748L13 2.82811ZM7.60938 10.5625H6.4375V9.39061L10.8125 5.01561L11.9844 6.18748L7.60938 10.5625ZM15.8125 9.04686V15.25C15.8104 15.6638 15.6452 16.06 15.3526 16.3526C15.06 16.6451 14.6638 16.8104 14.25 16.8125H1.75C1.33623 16.8104 0.939996 16.6451 0.647415 16.3526C0.354833 16.06 0.189553 15.6638 0.1875 15.25V2.74998C0.189553 2.33621 0.354833 1.93998 0.647415 1.6474C0.939996 1.35482 1.33623 1.18954 1.75 1.18748H7.95312C8.20177 1.18748 8.44022 1.28625 8.61604 1.46207C8.79185 1.63789 8.89062 1.87634 8.89062 2.12498C8.89062 2.37362 8.79185 2.61208 8.61604 2.7879C8.44022 2.96371 8.20177 3.06248 7.95312 3.06248H2.0625V14.9375H13.9375V9.04686C13.9375 8.79822 14.0363 8.55976 14.2121 8.38394C14.3879 8.20813 14.6264 8.10936 14.875 8.10936C15.1236 8.10936 15.3621 8.20813 15.5379 8.38394C15.7137 8.55976 15.8125 8.79822 15.8125 9.04686Z"
                                fill="#EA8215" />
                        </svg>
                    </lable>
                </div>
            </th>
        </tr>
        `
    ).join("")}
    </tbody>`


    // get id
    // get key
    // get new value
    const setStatePerson = (element) => {
        const indexkey = element.parentElement.parentElement.getAttribute("key")
        const key = element.getAttribute("name")
        const newvalue = element.value

        state.personas[indexkey][key] = newvalue
        console.log(state.personas[indexkey]);
    }
    table_person.innerHTML = person_detail
    // document.getElementById("w").parentElement.
    const inputs = table_person.getElementsByTagName("input")
    const arrowControl = (input, bool) => {
        if (bool) {
            input.stepUp()
        } else {
            input.stepDown()
        }
        setStatePerson(input)

    }
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        if (index % 2 == 0) {
            element.nextElementSibling.onclick = () => arrowControl(element, true)
            element.previousElementSibling.onclick = () => arrowControl(element, false)
        }
        element.oninput = () => setStatePerson(element)
    }
}
reRenderAddPerson()

function addPerson() {
    let newperson = {
        tipo: "persona",
        cantidad: 8,
        porcion: 250,
    }
    state.personas.push(newperson)
    reRenderAddPerson()
}
const add_person = document.getElementById("add_person")
add_person.onclick = () => addPerson()



// STEP 2

const createListCheckbox = (id_element, state_key) => {
    const carnes_list = document.getElementById(id_element)
    const setStateCheck = (name, index) => {
        state[name][index].used =  !state[name][index].used
 
        console.log(state[name][index].used);
        // let object_name = Object.keys(state[name][key])
        // const value = state[name][key][object_name[0]]
        // state[name][key][object_name[0]] = !value
    }
    const render_carnes_list = `${state[state_key].map((v) => (
        `<label class="flex gap-4">
        <input type="checkbox" name="${v.name}" id="${v.name}">
        ${v.name}
        </label>`
    )).join("")}`
    carnes_list.innerHTML = render_carnes_list
    for (let index = 0; index < carnes_list.getElementsByTagName("label").length; index++) {
        const element = carnes_list.getElementsByTagName("input")[index];
        element.onclick = (e) => setStateCheck(state_key, index)
    }
}


createListCheckbox("step_2", "carnes")
createListCheckbox("step_3", "embutidos")

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const handleSubmit = (e) => {
    e.preventDefault()
    let csrftoken = getCookie('csrftoken');
    // let csrf = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    // state.push('csrfmiddlewaretoken', csrf);
    // console.log(state);
    const body = JSON.stringify({data:state})
    fetch(window.location.href, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: body
    })
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}

calculadora.onsubmit = (e) => handleSubmit(e)