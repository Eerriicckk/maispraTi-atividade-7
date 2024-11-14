import React, { useEffect, useState } from 'react'
import Button from './Button';

const Numero8 = () => {
    const [loading, setLoading] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [imgSelected, setImgSelected] = useState("");
    const [dados, setDados] = useState([]);

    const handleSelectImage = (imgSelect) => {
        setImgSelected(imgSelect);
        setMostrarModal(true);
    }

    const fecharModal = () => {
        setImgSelected("");
        setMostrarModal(false);
    }

    const fazerRequisicao = async () => {
        try {
            setLoading(true);
            const request = await fetch("https://dummyjson.com/comments?limit=20");
            const data = await request.json();
            const images = [];
            for (let index = 0; index < data.comments.length; index++) {
                const comment = data.comments[index];
                images.push(`https://api.dicebear.com/9.x/lorelei/svg?seed=${comment.user.username}`)
            }

            setDados(images);
        } catch (error) {
            console.log(error)
            alert("Algum erro ocorreu, tente novamente em alguns instantes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { fazerRequisicao() }, [])

    return (
        <div style={{ position: "relative" }}>
            {loading ? <h1>Carregando</h1>
                :
                <>
                    <div style={{ display: "grid", gridTemplateColumns: "100px 100px 100px 100px" }}>
                        {dados && dados.map((dado, key) => (
                            <div key={key}>
                                <Button disabled={mostrarModal} style={{ backgroundColor: "transparent", border: "none" }} onClick={() => handleSelectImage(dado)}><img src={dado} style={{ width: "100px" }} /></Button>
                            </div>
                        ))}
                    </div>
                    {mostrarModal &&
                        <div style={{ position: "absolute", zIndex: 3, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.37)", top: 0, alignContent: "center" }}>
                            <div style={{ backgroundColor: "white", borderRadius: "16px", display: "flex", flexDirection: "column", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
                                <Button onClick={fecharModal} style={{ right: 0, width: "30px" }} >x</Button>
                                <img src={imgSelected} width={"500px"} alt="" />
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Numero8