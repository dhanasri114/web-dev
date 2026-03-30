function FruitsNames(props)
{
    return(
        <div>
            {props.names.map((name)=>(<li>{name}</li>))}
            {props.names1.map((name)=>(<p>{name}</p>))}
        </div>
    )
}

export default FruitsNames

//map function:
//syntax:{props.arra_name.map((element `    1`,index)=>(<jsx_element>{element)</jsx_element>))}