import  {useState} from 'react';

function ChangeColor()
{
    const[color,setColor]=useState("yellow");

function Color()
{
    setColor("red");
}

    return(
        <div>
            <h1 style={{ color }}>welcome rect</h1>
            <button onClick={Color}>Change Color</button>
        </div>
    )
}

export default ChangeColor