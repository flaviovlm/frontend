import './App.css'
import Aluno from './assets/components/Aluno'
import InfoCurso from './assets/components/InfoCurso'
import Message from './assets/components/Message'

function App() {
  return (
    <>
    <div className='container'>
      <h1>Welcome</h1>
      <Message/>
      <InfoCurso/>
      <Aluno/>
      </div>
    </>
  )
}

export default App
