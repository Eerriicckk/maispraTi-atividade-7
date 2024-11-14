import React, { useEffect, useState } from 'react'
import Button from './Button';

const Numero3 = () => {
    const [tarefas, setTarefas] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskId, setTaskId] = useState("");
    const [onlyFinished, setOnlyFinished] = useState(false);


    const adicionarTask = () => {
        if (taskId !== "") {
            const index = tarefas.findIndex(task => task.id === taskId);

            setTarefas([
                ...tarefas.slice(0, index),
                {
                    name: taskName,
                    description: taskDescription,
                    done: tarefas[index].done,
                    id: taskId
                },
                ...tarefas.slice(index + 1)
            ]);
        } else {
            setTarefas([...tarefas, { name: taskName, description: taskDescription, done: false, id: Date.now() }]);
        }

        setTaskName("");
        setTaskDescription("");
        setTaskId("");
    }

    const deletarTask = (targetTaskId) => {
        setTaskId("");
        setTarefas(tarefas.filter(tarefa => tarefa.id !== targetTaskId));
    }

    const atualizarTask = (targetTaskId) => {
        const index = tarefas.findIndex(task => task.id === targetTaskId);

        setTaskName(tarefas[index].name);
        setTaskDescription(tarefas[index].description);
        setTaskId(targetTaskId);
    }

    const concluirTask = (targetTaskId) => {
        const index = tarefas.findIndex(task => task.id === targetTaskId);
        setTarefas([
            ...tarefas.slice(0, index),
            {
                name: tarefas[index].name,
                description: tarefas[index].description,
                done: true,
                id: targetTaskId
            },
            ...tarefas.slice(index + 1)
        ]);
    }

    useEffect(() => console.log(tarefas), [tarefas])

    return (
        <div>
            <div style={{marginBottom:"15px"}}>
                <label>
                    nome
                    <input className='form-control' type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </label>
                <label style={{ marginLeft: "15px" }}>
                    descrição
                    <input className='form-control' type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                </label>
            </div>
            <Button disabled={taskName === "" || taskDescription === ""} onClick={() => adicionarTask()}>Adicionar task</Button>
            <br />
            <div className='form-check' style={{ maxWidth: "15%", margin: "auto" }}>
                <input className='form-check-input' type="checkbox" name="checkOnlyFinished" checked={onlyFinished} onChange={() => setOnlyFinished(!onlyFinished)} />
                <label className='form-check-label' for="checkOnlyFinished" >
                    ver apenas finalizados
                </label>
            </div>
            <br />

            <div>
                {(tarefas && tarefas.length > 0) &&
                    tarefas.map(tarefa => {
                        if (onlyFinished && !tarefa.done) return <></>

                        return (<p key={tarefa.id}>
                            {tarefa.name} <br />
                            {tarefa.description} <br />
                            {tarefa.id} <br />
                            {tarefa.done ? <>concluido</> : <>pendente</>} <br />
                            <Button onClick={() => deletarTask(tarefa.id)}>deletar</Button>
                            <Button onClick={() => atualizarTask(tarefa.id)}>atualizar</Button>
                            {!tarefa.done && <Button onClick={() => concluirTask(tarefa.id)}>concluir</Button>}
                        </p>)
                    })}
            </div>

        </div>
    )
}

export default Numero3