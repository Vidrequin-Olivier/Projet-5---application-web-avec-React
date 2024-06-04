import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation();
  
  const isHomePage = location.pathname === "/"
  const isAboutPage = location.pathname === "/AboutPage"

  return (
    <nav>
      <Link to="/" className={isHomePage ? 'active' : undefined}>Accueil</Link>
      <Link to="/AboutPage" className={isAboutPage ? 'active' : undefined}>A Propos</Link>
    </nav>
  )
}
