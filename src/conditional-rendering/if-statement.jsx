function CheckEven(props)
{
    if(props.num1%2==0)
    {
    return(
        <div>
            <h1>{props.num1}:are even numbers</h1>
        </div>
    )
}
else{
    return(
        <div>
            <h1>{props.num1}: not a even</h1>
        </div>
    )
}
}

export default CheckEven