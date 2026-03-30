function BodyColor()
{
    const change=()=>
    {
        document.body.style.backgroundColor='red';
    }
    return(
        <div>
            <button onClick={change}>Change color</button>
        </div>
    )
}

export default BodyColor