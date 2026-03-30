function Type1(props)
{
    const{name,color,cost}=props
    return(
        <div>
            <h2>props Destructing</h2>
            <p>props destruction are used to extenct the value</p>
            <p>it can use in chld compound only</p>
            <p>use const variable in desturcting props</p>
            <h3>Examples</h3>
            <ol>
                <li>fruit name:{name}</li>
                <li>fruit color:{color}</li>
                <li>fruit cost:{cost}</li>
            </ol>
        </div>
    )
}

export default Type1