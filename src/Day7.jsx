import React, { useEffect, useState } from 'react'

const Day7 = () => {

    const [time, setTime] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
  return (
    <div>
      Time Left : {time} second
    </div>
  )
}

export default Day7
