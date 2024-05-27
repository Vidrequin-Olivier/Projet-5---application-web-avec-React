import { Link } from "react-router-dom"

export default function AboutPage() {
  return <>
    <h1>A propos</h1>
    <nav>
      <Link to="/">lien vers page d'acceil</Link>
      <br />
      <Link to="/AccommodationSheet">lien vers "Fiche logement"</Link>
    </nav>
  </>
}