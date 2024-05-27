import { Link } from "react-router-dom"

export default function AccommodationSheet() {
  return <>
    <h1>Fiche logement</h1>
    <nav>
      <Link to="/">lien vers page d'acceil</Link>
      <br />
      <Link to="/AboutPage">lien vers la page "A propos"</Link>
    </nav>
  </>
}