import React, { useState } from 'react'

const Numero5 = () => {
    const [nomes] = useState([
        "Annecy", "Soncar", "Ceolbald", "Sungli", "Grimmar", "Suwaru",
        "Vellhelm", "Cynbald", "Georke", "Thorisum", "Chellcan", "Beornred",
        "Ley", "Fastorah", "Lafelf", "Charbrand", "Charald", "Ceorah",
        "Robne", "Jojo", "Beornchard", "Larich", "Wulfnas", "Racia",
        "Ranas", "Gardton", "Chaelwulf", "Ferthpaullay", "Kenste", "Rican",
        "Lauregin", "Sephthy", "Thrythald", "Nyacla", "Muelca", "Layred",
        "Nia", "Thrythregin", "Venard", "Gifuleofu", "Kefer", "Grimmes",
        "Gifuliam", "Brasald", "Ramuel", "Ethelwine", "Bardred", "Ealla",
        "Uvidvid", "Gorma", "Cy", "San", "Ria", "Steann",
        "Jackrob", "Warujeff", "Wineter", "Tonfast", "Cuthceol", "Mascan",
    ]);

    const [nomeFilter, setNomeFilter] = useState("");


    return (
        <div >
            <input className='form-control' type="text" value={nomeFilter} onChange={(e) => setNomeFilter(e.target.value)} />
            <div style={{ maxHeight: "700px", overflowY: "scroll" }}>
                <ul>
                    {nomes.map((nome, key) => {
                        if (nomeFilter !== "") {
                            if (nome.localeCompare(nomeFilter) >= 1) return (<li key={key}>{nome}</li>)
                        } else {
                            return (<li key={key}>{nome}</li>)
                        }
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Numero5