import { useState } from 'react'
import './style.css'

export default function AdicionarAluno (){

    const [name, setName] = useState('')
    const [email, setEmail] = useState ('')

    const [listAlunos, setListAlunos] = useState ([])

    const addAluno = (event) => {
        event.preventDefault()
        if (name && email) {

            setListAlunos ([...listAlunos, {name,email}])
            setName('')
            setEmail('')

        }
    }


return (
    <div className='container'>
    <div className='add_aluno'>

        <h2>Adicionar Aluno</h2>
        <form onSubmit={addAluno}>
            <input className='input_name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName (e.target.value)}
            />
            <input className='input_email'
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className='button'>Adicionar</button>
        </form>

        <hr/>

        <h3>Matriculados</h3>

        <ol type='text-area'>
            {listAlunos.map((aluno,index) => (

                <li key = {index}> {aluno.name} - {aluno.email} </li>
            ))}
        </ol>

    </div>
    </div>


)

}