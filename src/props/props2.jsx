function Data({name,color,cost})
{
    return(
        <div className="data">
            <ol>
                <li>fruit name is:{name}</li>
                <li>fruit color is:{color}</li>
                <li>fruit cost is:{cost}</li>
            </ol>
        </div>
    )
}

export default Data