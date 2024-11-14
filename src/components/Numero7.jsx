import React, { useEffect, useState } from 'react'
import Button from './Button';

const Numero7 = () => {
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState([]);

    const fazerRequisicao = async () => {
        try {
            setLoading(true);
            const request = await fetch("https://dummyjson.com/comments?limit=20");
            const data = await request.json();
            setDados(data.comments);
        } catch (error) {
            console.log(error)
            alert("Algum erro ocorreu, tente novamente em alguns instantes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { fazerRequisicao() }, [])

    return (
        <div>
            {loading ?
                <h1>Carregando</h1> :
                <>
                    <Button onClick={fazerRequisicao}>recarregar</Button>
                    <div style={{ maxHeight: "700px", overflowY: "scroll" }}>
                        <ul>
                            {dados && dados.map(dado => (<li key={dado.id}>{dado.body}</li>))}
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}

export default Numero7