const FormContact = () => {
    return (


        <div class="w-full bg-white rounded-lg p-5 md:py-12 md:px-9 shawdow2">
            <form id="contact_form" method="post" action="">
                <input type="hidden" name="csrfmiddlewaretoken" value="Dx2LlN4UKJhuBPwdPumb2ldrvrygmUSfJT6JqYynsaF7H1U4F1qbyVtXe81w1Ki0"/>
                    <p>
                        <label for="id_nombre_y_apellido">Nombre y apellido:</label>
                        <input type="text" name="nombre_y_apellido" required="" id="id_nombre_y_apellido"/>


                    </p>


                    <p>
                        <label for="id_email">Email:</label>
                        <input type="email" name="email" required="" id="id_email"/>


                    </p>


                    <p>
                        <label for="id_telefono_celular">Telefono celular:</label>
                        <input type="text" name="telefono_celular" required="" id="id_telefono_celular"/>


                    </p>


                    <p>
                        <label for="id_mensaje">Mensaje:</label>
                        <textarea name="mensaje" cols="40" rows="10" required="" id="id_mensaje"></textarea>




                    </p>


                    <button class="btn bg-primary  md:mr-auto" type="submit">ENVIAR MENSAJE</button>
            </form>
        </div>
    )
}

export default FormContact