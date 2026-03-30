function Employee(props)
{
    const{name,age,salary}=props
    return(
        <div>
            <h1>welcome</h1>
            
            {/* <p>value:{props.values.age}</p>
            <p>Name:{props.values.name}</p>
             */}
               {/* {props.arr.map((num)=>(<li>{num}</li>))}
               {props.obj.map((names)=>(<li>{names}</li>))}
               {props.arr.filter(n=>n%2===0)
               .map((n)=>(<li>{n}</li>))} */}

               <table className="main-table">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.salary}</td>
                </tr>
                <tr>
                    <td>{props.name1}</td>
                    <td>{props.age1}</td>
                    <td>{props.salary1}</td>
                </tr>
                
                 <tr>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{salary}</td>
                </tr>
               </table>
               
        </div>
    )
}

export default Employee