import axios from "axios";
import { useState } from "react";

function Read() {
  const [data, setData] = useState(null);

  function read()
  {
    axios.get("http://localhost:8080/customer/all")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <button onClick={read}>Show JSON Data</button>

      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default Read;
