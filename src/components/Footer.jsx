import '../style/style.css'
import logo from '../images/headerLogo.png'

export default function Footer() {
  return (
    <footer>
      <img className='footerLogo' src={logo} alt="Logo de la société Kasa." />
      <p>Remplacer l'adresse du logo par celle du logo de footer<br />
      que je ne parviens pas encore à copier depuis la maquette...</p>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}