import './style.css'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpg';

export default function Header (){
  return (
      <header className='header'>
        <Link to="/">
          <img src = {logo} alt = "Logo da contabilidade" />
          <span>Contabilidade Simples</span>
        </Link>
      
        <nav className='nav'>
          <NavLink to = "/sobre-nos">Sobre nós</NavLink>
          <NavLink to = "/fale-conosco">Fale conosco</NavLink>
        
        </nav>
      
      
      </header>
    
    
    
    
    
  )
  
  
  
}