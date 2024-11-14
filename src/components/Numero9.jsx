import React, { useEffect, useState } from 'react'
import Button from './Button';

const Numero9 = () => {
    const [paused, setPaused] = useState(true);
    const [started, setStarted] = useState(false);
    const [contadorRunning, setContadorRunning] = useState(0);
    const [inputContador, setInputContador] = useState(0);

    useEffect(() => {
        if (paused) return

        if (contadorRunning <= 0) {
            if ((contadorRunning - 1) === 0) alert("contador chegou em zero!")
            setStarted(false);
            setPaused(true);
            return;
        }

        const timer = setTimeout(() => {
            setContadorRunning(contadorRunning - 1)
        }, 1000);

        return () => clearTimeout(timer)
    }, [contadorRunning, paused])

    const handleStart = () => {
        setContadorRunning(inputContador);
        setStarted(true);
        if (paused) setPaused(!paused);
    }

    const mostraTimer = (timer) => {
        var units = {
            "ano": 365 * 30 * 7 * 24 * 60 * 60,
            "mese": 30 * 7 * 24 * 60 * 60,
            "semana": 7 * 24 * 60 * 60,
            "dia": 24 * 60 * 60,
            "hora": 60 * 60,
            "minuto": 60,
            "segundo": 1
        }

        var result = []

        for (var name in units) {
            var p = Math.floor(timer / units[name]);
            if (p == 1) result.push(" " + p + " " + name);
            if (p >= 2) result.push(" " + p + " " + name + "s");
            timer %= units[name]
        }

        return result;

    }

    return (
        <div>
            <p>{mostraTimer(contadorRunning).map(timer => (timer))}</p>
            <hr />
            <input className='form-control' type="number" disabled={!paused} value={inputContador} min={0} onChange={(e) => { setInputContador(e.target.value) }} />
            <br />
            <Button disabled={inputContador <= 0} onClick={handleStart} >{!started ? "iniciar" : "reiniciar"}</Button>
            <br />
            <Button disabled={inputContador <= 0} onClick={() => setPaused(!paused)}>{paused ? ">" : "||"}</Button>
            <br />
        </div>
    )
}

export default Numero9