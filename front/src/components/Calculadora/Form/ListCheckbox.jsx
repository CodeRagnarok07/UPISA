

const ListCheckbox = ({data,cols}) => {
   
    return (
        <div>
            <h4>SELECCIONAR CARNES</h4>

            <div className={`grid grid-cols-1 lg:grid-cols-${cols} my-12  gap-7`}>

                {data.map((v, k) => (

                    <label key={k} class="flex items-start gap-4">
                        <input type="checkbox" name="${v.name}" id="${v.name}" class="min-h-2 min-w-2" />
                        {v}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ListCheckbox