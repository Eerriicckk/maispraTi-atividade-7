import React, { useState } from 'react'
import Button from './Button';

const Numero6 = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [passField, setPassField] = useState("password");
    const [entrou, setEntrou] = useState(false);

    const handleEnviar = () => {
        if (nome === "" || email === "" || senha === "") {
            return alert("Todos os campos precisam estar preenchidos");
        }

        setEntrou(true);
    }

    const handleSair = () => {
        setEntrou(false);
        setNome("");
        setEmail("");
        setSenha("");
    }

    const changePassFieldType = () => {
        if (passField === "password") {
            setPassField("text")
        } else {
            setPassField("password");
        }
    }

    return (
        <div>
            {entrou ?
                <>
                    <h1>Olá {nome}</h1>
                    <h2>Seu email é {email}</h2>
                    <h2>Sua senha é {senha}</h2>
                    <Button onClick={handleSair}>Sair</Button>
                </>
                :
                <>
                    <label>
                        nome
                        <input className='form-control' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        email
                        <input className='form-control' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        senha
                        <div class="input-group mb-3">
                            <input className='form-control' value={senha} type={passField} onChange={(e) => setSenha(e.target.value)} />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <Button onClick={changePassFieldType}>{passField === "password" ? "O" : "─"}</Button>
                                </div>
                            </div>
                        </div>
                    </label>
                    <br />
                    <Button onClick={handleEnviar} >Enviar!</Button>
                </>
            }
        </div>
    )
}

export default Numero6