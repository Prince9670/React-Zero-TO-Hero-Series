import React, { useEffect, useState } from 'react'

const Day6 = () => {

    const [data, setData] = useState(null);

     useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => setData(json));
  }, [])
  return (
    <div>
      {
        data ? (
            <div>
                <h1>{data.title}</h1>
            </div>
        ) : (
            <p>Loading...</p>
        )
      }
    </div>
  )
}

export default Day6
