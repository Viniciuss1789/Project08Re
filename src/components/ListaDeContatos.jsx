import React, { useState } from "react";
import './ListaDeContatos.css'

function ListaDeContatos() {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const adicionarContato = () => {
        if (nome && telefone) {
            setContatos([...contatos, { nome, telefone }]);
            setNome('');
            setTelefone('');
        }
    };

    return (
        <div class="body">
            <h2>Lista de Contatos</h2>
            <div class="input1">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome (e.target.value)}
                  placeholder="Nome"
                />
            </div>
            <div class="Input2">
                <input class="input2"
                   type="text"
                   value={telefone}
                   onChange={(e) => setTelefone (e.target.value)}
                   placeholder="Telefone"
                    />
            </div>
            <div class="botao">
                <button onClick={adicionarContato}> Adicionar Contato </button>
            </div>
            <ul>
                {contatos.map((contatos, index) => (
                    <li key={index}>
                        <strong>{contato.nome}:</strong>
                {contato.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeContatos;