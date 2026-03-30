function EvenNumbers(props)
{
    const evNum=props.n.filter((i)=>i%2===0)
    return(
        <div>
           <h2>{evNum.map((num)=>(<li>{num}</li>))}this are even</h2>
        </div>
    )

}


export default EvenNumbers