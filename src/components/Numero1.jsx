import { useState } from 'react'
import Button from './Button';

const Numero1 = () => {

    const [contador, setContador] = useState(0);

    const handleChangeContador = (newValue) => {
        setContador(newValue);
    }

    return (
        <div>
            <p>{contador}</p>
            <Button onClick={() => handleChangeContador(contador + 1)}>Incrementar</Button>
            <Button disabled={contador <= 0} onClick={() => handleChangeContador(contador - 1)}>Decrementar</Button>
        </div>
    )
}

export default Numero1