

const Table = ({ data }) => {


    return (data &&

        <div>
            <table class="tabla-nutricional mb-8">
                <thead>
                    <tr>
                        <th></th>
                        <th>Cantidad por porción</th>
                        <th>VD*</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.entries(data).map((key, index) => ( index % 2 == false &&
                        <tr>
                            {/* {console.log() } */}
                            <td>{key[0]}</td>
                            <td>{key[1]}</td>
                            <td>{data[`vd_${key[0]}`]}</td>
                        </tr>                          
                    ))}

                   
                </tbody>

            </table>
            <p className="mt-4">* % Valores Diarios con base a una dieta de 2.000 Kcal u 8.400 KJ.
                Sus Valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.</p>
        </div>


    )
}

export default Table