import React, { useEffect, useState } from 'react'
import Button from './Button';

const Numero4 = () => {
    const [paused, setPaused] = useState(true);
    const [started, setStarted] = useState(false);
    const [contadorRunning, setContadorRunning] = useState(0);

    useEffect(() => {
        if (paused) return

        const timer = setTimeout(() => {
            setContadorRunning(contadorRunning + 1)
        }, 1000);

        return () => clearTimeout(timer)
    }, [contadorRunning, paused])

    const handleStart = () => {
        setContadorRunning(0);
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

        if(result.length === 0) return (["0 segundos"])

        return result;

    }

    return (
        <div>
            <p>{mostraTimer(contadorRunning).map(timer => (timer))}</p>
            <Button onClick={handleStart} >{!started ? "iniciar" : "reiniciar"}</Button>
            <Button  onClick={() => setPaused(!paused)}>{paused ? ">" : "||"}</Button>
        </div>
    )
}

export default Numero4