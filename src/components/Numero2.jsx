import React, { useEffect, useState } from 'react'
import Button from './Button';

const Numero2 = () => {
    const [colorRgb, setColorRgb] = useState("0,100,0");

    const handleChangeColor = () => {
        const color1 = Math.floor(Math.random() * 250);
        const color2 = Math.floor(Math.random() * 250);
        const color3 = Math.floor(Math.random() * 250);
        setColorRgb(`${color1},${color2},${color3}`)
    }

    useEffect(() => handleChangeColor(), [])

    return (
        <div style={{ backgroundColor: `rgb(${colorRgb})`, height: "700px" }}>
            <Button onClick={handleChangeColor}>Mudar cor</Button>
            <p>RGB: {colorRgb}</p>
        </div>
    )
}

export default Numero2