import { useState } from 'react'
import './style.css'

export default function Aluno (){

    const [name, setName] = useState ("Flávio")
    const [email, setEmail] = useState ("flavio@example.com")
    const [cpf, setCpf] = useState ("111.222.333-44")

    return (

        <div className='aluno'>

            <h2>Dados aluno</h2>
            <p><strong>Nome: </strong>{name}</p>
            <p><strong>Email: </strong>{email}</p>
            <p><strong>Cpf: </strong>{cpf}</p>


        </div>



    )
}