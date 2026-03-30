function OddNumbers({OddNumbers=[1,3,25,35,36,6,44,2]})  // default values
{
    const odd=OddNumbers.filter((o)=>o%2==1)
    return(
        <div>
            {odd.map((i)=>(<li>{i}</li>))}
        </div>
    )
}

export default OddNumbers