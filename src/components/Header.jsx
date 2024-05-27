import { Link } from "react-router-dom"
import '../style/style.css'
import logo from '../images/headerLogo.png'

export default function Header() {
  return (
    <header>
      <img className='headerLogo' src={logo} alt="Logo de la société Kasa." />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/AboutPage">A Propos</Link>
      </nav>
    </header>
  )
}