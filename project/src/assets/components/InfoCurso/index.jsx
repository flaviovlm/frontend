import { useState } from 'react'
import './style.css'

export default function InfoCurso (){
    //criando variáveis
    //useState é uma função do ReactJS
    //Também é chamada de Hooks
    const [name, setName] = useState ("Desenvolvimento de Sistemas")
    const [cargaHoraria, setCargaHoraria] = useState ("158 horas")
    const [local, setLocal] = useState ("SENAI")
    return (

        <div className='info-curso'>

        <h2>Dados do curso</h2>
        <p><strong>Nome:</strong> {name} </p>
        <p><strong>Carga Horária:</strong> {cargaHoraria} </p>
        <p><strong>Local:</strong> {local} </p>
        
        </div>

    )
}