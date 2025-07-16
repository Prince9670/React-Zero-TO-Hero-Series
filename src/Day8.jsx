import React, { useState } from 'react'

const Day8 = () => {
    const [backgroundColor, setBackgroundColor] = useState('yellow');

    const handleClick = () => {
        const newColor = backgroundColor === 'white' ? 'black' : 'white';
        setBackgroundColor(newColor)
    }
  return (
    <div onClick={handleClick}
    style={{
        backgroundColor: backgroundColor,
        width: '200px',
        height: '200px',
        cursor: 'pointer'
    }}>
      click me change color
    </div>
  )
}

export default Day8
