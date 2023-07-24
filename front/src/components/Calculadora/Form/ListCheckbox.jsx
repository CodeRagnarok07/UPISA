

const ListCheckbox = ({data,cols , dataName, state, setState}) => {

    const handleChange=(e,v)=>{
        const newData = state[dataName]
        e.currentTarget.checked ? newData.push(v) : newData.shift(v)

        const NewState = {...state}
        NewState[dataName] = newData
        setState(NewState)
    }

    return (
        <div>
            <h4 className="uppercase">SELECCIONAR {dataName}</h4>

            <div className={`grid grid-cols-1 lg:grid-cols-${cols} my-12  gap-7`}>

                {data.map((v, k) => (
                    <label key={k} class="flex items-start gap-4">
                        <input onChange={(e)=>handleChange(e,v)} type="checkbox" name="${v.name}" id="${v.name}" class="min-h-2 min-w-2" />
                        {v}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ListCheckbox