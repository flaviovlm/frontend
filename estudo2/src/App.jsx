import './App.css'
import AdicionarAluno from './components/AdicionarAluno'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
    return (
        <>
            <Header/>
            <div>
            <AdicionarAluno/>
            </div>
            <Footer/>
        </> 
   )
}
