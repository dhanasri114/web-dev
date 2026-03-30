function Type(props)
{
    const{name='banana',color='green',cost=10}=props
    return(
        <div>
            <h2>default props value in destructing</h2>
            <li>Fruit name:{name}</li>
            <li>Fruit color is:{color}</li>
            <li>Fruits cost is:{cost}</li>
        </div>
    )
}

export default Type