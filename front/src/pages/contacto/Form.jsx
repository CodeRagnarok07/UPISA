import contactFormText from 'src/locale/contactForm.json'

const FormContact = () => {
    const text = contactFormText[localStorage.userlang]
    console.log(text);
   
    return (


        <div class="w-full bg-white rounded-lg p-5 md:py-12 md:px-9 shawdow2">
            <form id="contact_form" method="post" action="">
                    <p>
                        <label for="id_nombre_y_apellido">{text[0]}:</label>
                        <input type="text" name="nombre_y_apellido" required="" id="id_nombre_y_apellido"/>
                    </p>
                    <p>
                        <label >{text[1]}:</label>
                        <input type="email" name="email" required="" id="id_email"/>
                    </p>
                    <p>
                        <label >{text[2]}:</label>
                        <input type="text" name="telefono_celular" required="" id="id_telefono_celular"/>
                    </p>
                    <p>
                        <label >{text[3]}:</label>
                        <textarea name="mensaje" cols="40" rows="10" required="" id="id_mensaje"></textarea>
                    </p>
                    <button class="btn bg-primary  md:mr-auto" type="submit">{text[4]}</button>
            </form>
        </div>
    )
}

export default FormContact